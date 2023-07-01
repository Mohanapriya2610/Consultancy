const mongoose = require('mongoose')

const connectDb = () => {

    mongoose.connect(process.env.DB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then((con) => {
        console.log(`Connected successfully : ${con.connection.host}`);
    })

}

module.exports = connectDb;