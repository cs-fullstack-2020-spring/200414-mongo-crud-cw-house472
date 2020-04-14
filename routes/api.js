let express = require('express');
let router = express.Router();
router.use(express.json());
//sanity
// router.get('/', (req, res)=>{
//     res.send("test message")
// });

//import mongoose and create variable

let NameCollection = require('../models/EntrySchema')

//create new resident
router.post('/', (req, res)=>{
    // res.send('create method worked')
    NameCollection.create(req.body, (errors, results)=>{
        errors ? res.send(errors) : res.send(results);
    })
});

//get all
router.get('/', (req, res)=>{
    NameCollection.find({}, (errors, results)=>{
        errors ? res.send(errors) : res.send(results)
    })
})
//find single residents
router.get('/', (req, res)=>{
    NameCollection.find({single:"true"}, (errors, results)=>{
        errors ? res.send(errors) : res.send(results)
    })
})

//find by first name 
router.get('/:personID', (req, res)=>{
    // res.send("message")
    NameCollection.findOne({firstName:req.params.personID},(errors, results)=>{
        errors ? res.send(errors) : res.send(results)
    })
});

//update by phone
router.put('/:personID', (req, res)=>{

    // res.send('message')
    NameCollection.findOneAndUpdate({firstName:req.params.personID}, req.body, (errors, results)=>{
        errors ? res.send(errors) : res.send(results)
    })
});

//delete a resident
router.delete('/:personID', (req, res)=>{
    NameCollection.findOneAndDelete({firstName:req.params.personID}, (errors, results)=>{
        errors ? res.send(errors) : res.send(`${req.params.personID} was deleted`)
    });
})

module.exports = router;