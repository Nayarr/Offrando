const mongoose = require('mongoose');
// ➤Import module

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connexion MongoDB réussie');
  } 
  catch (error) {
    console.error('Échec de la connexion MongoDB :', error.message);
    process.exit(1);
  }
};
// ➤Fait le lien entre front et back

module.exports = connectDB;
