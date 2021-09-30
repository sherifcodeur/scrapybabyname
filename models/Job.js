
    // Job Model


    //importing external dependencies
    const mongoose = require('mongoose');



    // creating Job Schema
    const Schema = mongoose.Schema;
    const jobSchema = new Schema({

        title : {
            type:String,
            required:[true,'required field'],       
        },
        city:{

            type:String,

        },
        description:{
            type:String
        },
        date:{
            type:Date,

        },
        url:{
            type:String
        }
    
    },     
        // Make Mongoose use Unix time (seconds since Jan 1, 1970)
        { timestamps: true }
    );


    // creating model Job based on the job schema
    const Job = mongoose.model('job',jobSchema);



    //exporting the model Job
    module.exports =  Job ;