import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
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
        required: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

export default model('Project', projectSchema);