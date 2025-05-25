const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
    userID: { 
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true 
    },
    dealID: { 
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Deal', 
        required: true 
    },
    value: { 
        type: Number, 
        enum: [1, -1],
        required: true 
    }
}, 
{ 
    timestamps: true 
})

const Vote = mongoose.model('Vote', VoteSchema);
module.exports = Vote;