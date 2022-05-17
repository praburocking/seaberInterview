import express, { Request, Response, NextFunction } from 'express';
import {handleFrom,handleTo,handleCargo} from './routes/route'
import {pushDataToSeaberJob} from './scheduler/pushDataToSeaber'

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

app.listen(port, () => {
  console.log(`Seaber integration layer up and running on port number: ${port}.`);
});

app.post('/from', handleFrom);
app.post('/to',handleTo);
app.post('/cargo',handleCargo);
pushDataToSeaberJob()

