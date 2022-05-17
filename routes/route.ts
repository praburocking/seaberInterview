import { Request, Response, NextFunction } from 'express';
import {addOrUpdateShip} from '../models/models'


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
  cargoType: String;
  cargoAmount: String;

};




export const handleTo= async (request: Request, response: Response, next: NextFunction) => {

let body:toTemplate=request.body;
const savedData = await addOrUpdateShip({ id: body.extOrderId,to:body.toLocation});
response.status(200).json(savedData);

}

export const handleFrom= async  (request: Request, response: Response, next: NextFunction) => {
let body:fromTemplate=request.body;
const savedData = await addOrUpdateShip({ id: body.extOrderId,from:body.fromLocation});
response.status(200).json(savedData);
}


export const handleCargo= async(request: Request, response: Response, next: NextFunction) => {
  let body:cargoTemplate=request.body;
  const savedData = await addOrUpdateShip({ id: body.extOrderId,cargo_type:body.cargoType,cargo_amount:body.cargoAmount});
  response.status(200).json(savedData);
}


