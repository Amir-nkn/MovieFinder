//  Importation des modules nécessaires
const express = require("express"); // Framework pour créer le serveur web
const request = require("request"); // Module pour effectuer des requêtes HTTP
const fs = require("fs"); // Module pour manipuler les fichiers
const path = require("path"); // Module pour gérer les chemins de fichiers
const config = require("./config"); // Fichier de configuration contenant la clé API et le port

const app = express();

//  Rendre les fichiers statiques accessibles (HTML, CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

//  Fonction utilitaire pour créer un nom de fichier valide à partir du titre du film
function safeFileName(title) {
  return title.replace(/[^\w\d]/g, "_"); // Remplace les caractères spéciaux par "_"
}

//  Route 1 : /fetch/:title
//  Récupère les données d’un film via l’API OMDb, les enregistre dans un fichier JSON, puis redirige vers /view
app.get("/fetch/:title", (req, res) => {
  const title = req.params.title;
  const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${
    config.API_KEY
  }`;
  const fileName = `movie_${safeFileName(title)}.json`;

  request.get({ url, json: true }, (err, response, data) => {
    //  Gestion des erreurs de récupération
    if (err || response.statusCode !== 200 || data.Response === "False") {
      return res.status(500).send("Erreur de récupération");
    }

    // Enregistre les données dans un fichier JSON
    fs.writeFile(fileName, JSON.stringify(data), (err) => {
      if (err) return res.status(500).send("Erreur d'enregistrement");
      //  Redirection vers la page d’affichage
      res.redirect(`/view?t=${safeFileName(title)}`);
    });
  });
});

//  Route 2 : /data/:title
//  Lit les données depuis le fichier JSON et les envoie au client en format JSON
app.get("/data/:title", (req, res) => {
  const filePath = path.join(
    __dirname,
    `movie_${safeFileName(req.params.title)}.json`
  );
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(404).json({ error: "Film introuvable" });
    res.json(JSON.parse(data));
  });
});

//  Route 3 : /view
//  Envoie la page HTML principale (index.html)
app.get("/view", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//  Lancement du serveur sur le port défini dans config.js
app.listen(config.PORT, () => {
  console.log(`🎬 Serveur sur http://localhost:${config.PORT}`);
});
