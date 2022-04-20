const mongoos = require('mongoose')

const projectSchema = new mongoos.Schema({
    name: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    user: {
        type: mongoos.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoos.model('Project', projectSchema);