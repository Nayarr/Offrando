const express = require('express'); 
// ➤Pour créer le serveur web - importe le module

const mongoose = require('mongoose'); 
// ➤Pour me connecter a MongoDB - importe le module

const cors = require('cors'); 
// ➤Fait le lien entre front et back - importe le module

require('dotenv').config(); 
// ➤Pour pouvoir lire les variables de .env

const app = express(); 
// ➤Facilite la compréhension

app.use(cors()); 
// ➤Permet au front d'acceder à l'API

app.use(express.json()); 
// ➤Permet de lire les données de req.body

app.get('/', (req, res) => { 
  res.send('API Offrando en ligne 🚀'); 
}); 
// ➤Route Get , permet de voir si l'API fonctionne

const connectDB = require('./config/db');
connectDB();
// ➤Connexion a MongoDB , envoie un message d'erreur ou de reussite selon le cas.

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});