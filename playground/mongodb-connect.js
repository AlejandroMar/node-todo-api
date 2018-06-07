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

   /*  db.collection('Todos').insertOne({
        text:'Something to do',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    }); */

   /*  db.collection('Users').insertOne({
        name: 'Alejo',
        age: 24
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    })
   client.close(); */
})