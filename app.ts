import express, { Request, Response, NextFunction } from 'express';
import {handleFrom,handleTo,handleCargo} from './routes/route'
import {pushDataToSeaberJob} from './scheduler/pushDataToSeaber'

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});


interface fromTemplate {
  extOrderId: String;
  type: String;
  fromLocation: String;

};
interface toTemplate {
  extOrderId: String;
  type: String;
  toLocation: String; 
  
};

interface cargoTemplate {
  extOrderId: String;
  type: String;
  fromLocation: String; 
  
};

const handleFrom1= (request: Request, response: Response, next: NextFunction) => {

console.log(request);
let body:fromTemplate=request.body;

response.status(200).json(body);

}


app.post('/from', handleFrom);
app.post('/to',handleTo);
app.post('/cargo',handleCargo);
pushDataToSeaberJob()

