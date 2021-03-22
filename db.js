const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.userNa}:${process.env.passWo}@firstone.f8zsg.mongodb.net/${process.env.dataBa}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    
});
const connection = mongoose.connection;
connection.once('open', function () {
    console.log('MongoDB database connection established successfully!');
})