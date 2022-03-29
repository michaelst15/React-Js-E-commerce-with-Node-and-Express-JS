const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    proffession: {
        type: String,
        allowNull: false
    },
    proffession: {  
        type: String,
        allowNull: false
    },
    status: {
        type: Boolean,
        allowNull: false
    },
    desc_job: {
        type: String,
        allowNull: false
    }
}, {
    timestamps: false
});

const data = mongoose.model('jobs', dataSchema);
module.exports = {
    data
};