import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as firestorm from 'firebase-firestorm';
import { Collection } from 'firebase-firestorm';
import { AppModule } from './src/app.module';
import { ShoppingListType } from './src/shopping-list-type/model/shopping-list-type.model';
const admin = require('firebase-admin');
const functions = require('firebase-functions');

const expressServer = express();

const createFunction = async (expressInstance): Promise<void> => {
  admin.initializeApp(functions.config().firebase);
  const firestore = admin.firestore();
  firestorm.initialize(firestore);

  // For testing purposes
  insertInitialData();

  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  await app.init();
};

function insertInitialData() {
  const shoppingListType1 = new ShoppingListType();
  shoppingListType1.name = 'name 111111';

  const shoppingListType2 = new ShoppingListType();
  shoppingListType2.name = 'name 222222';

  Collection(ShoppingListType).create(shoppingListType1);
  Collection(ShoppingListType).create(shoppingListType2);
}

createFunction(expressServer)
  .then(() => console.log('Nest is ready'))
  .catch(err => console.error('Something went wrong', err));

export const api = functions
  .region('europe-west1')
  .https.onRequest(expressServer);
