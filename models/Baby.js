
    // Baby Model


    //importing external dependencies
    const mongoose = require('mongoose');

    const uniqueValidator = require('mongoose-unique-validator');



    // creating Baby Schema
    const Schema = mongoose.Schema;
    const babySchema = new Schema({

        name : {
            type:String,
            required:[true,'required field'],
            unique:true,       
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

    babySchema.plugin(uniqueValidator);

    
    // creating model Baby based on the baby schema
    const Baby = mongoose.model('baby',babySchema);

    



    //exporting the model Baby
    module.exports =  Baby ;