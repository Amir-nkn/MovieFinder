//  Récupère les paramètres de l’URL (ex. ?t=Batman)
const params = new URLSearchParams(window.location.search);
const title = params.get("t");

// Fonction pour convertir un titre de film en nom de fichier valide
function safeFileName(title) {
  return title.replace(/[^\w\d]/g, "_"); // Remplace les caractères spéciaux par "_"
}

// Récupère les données JSON du film depuis le serveur
fetch(`/data/${safeFileName(title)}`) // Envoie une requête vers /data/TITRE
  .then((res) => res.json())
  .then((data) => {
    const div = document.getElementById("movie-data");

    //  Si le film n’a pas été trouvé
    if (data.Error) {
      div.innerHTML = "Film introuvable";
      return;
    }

    //  Injection dynamique du contenu HTML avec les données du film
    div.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div class="flex justify-center">
        <img src="${data.Poster}" alt="Poster" class="rounded-xl shadow-2xl w-[250px] h-auto hover:scale-105 transition-transform duration-300">
      </div>

      <div>
        <h2 class="text-3xl font-bold text-yellow-300 mb-4">${data.Title} <span class="text-white text-lg font-light">(${data.Year})</span></h2>
        <ul class="space-y-3 text-sm md:text-base">
          <li class="bg-white/10 px-4 py-2 rounded border-l-4 border-yellow-400"><strong>🎬 Genre:</strong> ${data.Genre}</li>
          <li class="bg-white/10 px-4 py-2 rounded border-l-4 border-yellow-400"><strong>🎞️ Réalisateur:</strong> ${data.Director}</li>
          <li class="bg-white/10 px-4 py-2 rounded border-l-4 border-yellow-400"><strong>⭐ Acteurs:</strong> ${data.Actors}</li>
          <li class="bg-white/10 px-4 py-2 rounded border-l-4 border-yellow-400"><strong>🌟 IMDb:</strong> ${data.imdbRating}</li>
          <li class="bg-white/10 px-4 py-2 rounded border-l-4 border-yellow-400"><strong>⏱️ Durée:</strong> ${data.Runtime}</li>
          <li class="bg-white/10 px-4 py-2 rounded border-l-4 border-yellow-400"><strong>📖 Intrigue:</strong> ${data.Plot}</li>
        </ul>
      </div>
    </div>
  `;
  })
  //  Gestion des erreurs réseau ou serveur
  .catch((err) => {
    document.getElementById("movie-data").textContent = "Erreur de chargement";
  });
