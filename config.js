//  Chargement des variables d'environnement depuis le fichier .env
const dotenv = require("dotenv");
dotenv.config();

// Exportation des variables nécessaires (clé API et port)
module.exports = {
  API_KEY: process.env.API_KEY, // Clé API pour accéder à l'API publique (OMDb)
  PORT: process.env.PORT || 3000, // Port d'écoute du serveur Express (par défaut 3000)
};
