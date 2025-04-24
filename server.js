import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import admin from 'firebase-admin';
import taskRoutes from './controllers/taskController.js';


admin.initializeApp({
  credential: admin.credential.cert("serviceKey.json"),
});
const db = admin.firestore();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/tasks', taskRoutes(db));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
