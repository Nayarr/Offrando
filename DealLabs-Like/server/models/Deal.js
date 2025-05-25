const mongoose = require('mongoose');

const DealSchema = new mongoose.Schema({
    titre: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    prixBase: { 
        type: Number, 
        required: true
    },
    prixReduit: { 
        type: Number 
    },
    categorie: { 
        type: String, 
        required: true 
    }
}, 
{ 
    timestamps: true 
})

const Deal = mongoose.model('Deal', DealSchema);
module.exports = Deal;