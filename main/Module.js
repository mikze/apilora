import assert from 'assert';
import * as mongodb from 'mongodb';

const ObjectId = mongodb.ObjectId;
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:3001/meteor';

const insertDocument = (db, callback,recivedMsg) => {
    db.collection('measurements').insertOne( { "text" : recivedMsg} , function(err, result) {
     assert.equal(err, null);
     console.log("Inserted a document into the measurements collection.");
     callback();
   });
 };

 const pushDocument = (db, callback,recivedMsg) => {
  db.collection('restaurants').update({_id:1}, {$push: { LorRecivedMsg: recivedMsg }} , function(err, result) {
   assert.equal(err, null);
   console.log("Inserted a document into the restaurants collection.");
   callback();
 });
};

export const insert = recivedMsg => {MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  }, recivedMsg);
});}

export const push = recivedMsg => {MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  pushDocument(db, function() {
      db.close();
  }, recivedMsg);
});}

export const HelloWorld = () => console.log('Welcome to lora server');

export const AddNewMesureToDataBase = () => console.log('Add new mesure');