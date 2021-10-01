
    // Baby Model


    //importing external dependencies
    const mongoose = require('mongoose');



    // creating Baby Schema
    const Schema = mongoose.Schema;
    const babySchema = new Schema({

        name : {
            type:String,
            required:[true,'required field'],       
        },
        gender:{
            type:String
        },
        origin:{
            type:String
        },
        popularity:{
            type:String
        }
    
    },     
        // Make Mongoose use Unix time (seconds since Jan 1, 1970)
        { timestamps: true }
    );


    // creating model Baby based on the baby schema
    const Baby = mongoose.model('baby',babySchema);



    //exporting the model Baby
    module.exports =  Baby ;