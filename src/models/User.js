const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
mongoose.Promise = global.Promise;

const modelSchema = new moongose.Schema({
    name: String,
    email: String,
    state: String,
    passwordHash: String,
    token: String
});

const modelName = 'User';

if (mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];
} else {
    module.exports = mongoose.model(modelName, modelSchema);
}