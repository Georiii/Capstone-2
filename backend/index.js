import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import admin from 'firebase-admin';
import dotenv from 'dotenv';
import {createRequire} from 'module';

dotenv.config();

const app = express();
const port = process.env.PORT || 6000;
const require = createRequire(import.meta.url);
const serviceAccount = require('./serviceAccountKey.json');


//middleware
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
   console.log(`🚀 Server is running on port ${port}`);

});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
 
});

const db = admin.firestore();
export { db, admin };
