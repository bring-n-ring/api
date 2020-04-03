import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as firestorm from 'firebase-firestorm';
import { AppModule } from './src/app.module';
const admin = require('firebase-admin');
const functions = require('firebase-functions');

const expressServer = express();

const createFunction = async (expressInstance): Promise<void> => {
  admin.initializeApp(functions.config().firebase);
  const firestore = admin.firestore();
  firestorm.initialize(firestore);

  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  await app.init();
};

createFunction(expressServer)
  .then(() => console.log('Nest is ready'))
  .catch(err => console.error('Something went wrong', err));

export const api = functions
  .region('europe-west1')
  .https.onRequest(expressServer);
