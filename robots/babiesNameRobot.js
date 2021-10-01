

const axios = require('axios')

const jsdom = require('jsdom')

const { JSDOM } = jsdom;

const baby = require('../models/Baby');


// letter A 

const grab = axios('https://www.bounty.com/pregnancy-and-birth/baby-names/baby-name-search/a?PageNumber=1#ListingTop').then(response=>{


    const html = response.data

    const dom = new JSDOM(html);

    



    const theul = dom.window.document.querySelector(".single-display");

    const thelis =theul.querySelectorAll('li')

    console.log(thelis)

    thelis.forEach(element=>{


        console.log(element.querySelector('.name').textContent)
        console.log(element.querySelector('.gender').textContent)
        console.log(element.querySelector('.origin').textContent)
        console.log(element.querySelector('.popularity').textContent)

        let thename = element.querySelector('.name').textContent
        let thegender = element.querySelector('.gender').textContent
        let theorigin = element.querySelector('.origin').textContent
        let thepopularity = element.querySelector('.popularity').textContent

        let newName = {

            name: thename,
            gender:thegender,
            origin:theorigin,
            popularity:thepopularity
        }

        saveInDb(newName)
    })


}).catch(err=>console.log(err))


const saveInDb = (name)=>{

    baby.create(name,function(err,res){

        if(err){

            console.log(err)
        }
    })

}




module.exports = grab