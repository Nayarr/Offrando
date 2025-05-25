const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { 
        type:  String,
        required: true,
        unique: true
    },
    email: { 
        type:  String,
        required: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: 'Email non valide'
        }
    },
    hashedPassword: { 
        type:  String,
        required: true 
    },
    role: { 
        type:  String,
        enum: ['user', 'admin'],
        required: true 
    },
}, 
{ 
    timestamps: true 
})

const User = mongoose.model('User', UserSchema);
module.exports = User;