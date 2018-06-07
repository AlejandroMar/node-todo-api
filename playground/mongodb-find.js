//const MongoClient = require('mongodb').MongoClient;
//The objectID property let's me create and do things with ids
const {MongoClient, ObjectID} = require('mongodb');

const obj =  new ObjectID;
//I created an unique id that i can use in many things like for example in react to connect the react id with the mongo id
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MondoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');
    //The toArray method returns a promise
    //we can look for special properties like this
    db.collection('Todos').find({completed: false}).toArray()
        .then(docs => {
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2))
        })
        .catch(err => console.log('Unable to fetch docs', err));
    //here I don't client close()
   client.close(); 
})