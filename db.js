const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(`mongodb+srv://${process.env.userNa}:${process.env.passWo}@firstone.f8zsg.mongodb.net/${process.env.dataBa}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});