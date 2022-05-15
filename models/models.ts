const { Sequelize, Op,Model, DataTypes } = require("sequelize");


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'integ_seaber.sqlite'
});



export const Ship = sequelize.define("ship", {
  id: {
	type:DataTypes.TEXT,
	primaryKey:true
	},
  from: DataTypes.TEXT,
  to: DataTypes.TEXT,
  cargo_type: DataTypes.TEXT,
  cargo_amount: DataTypes.DOUBLE,
  is_send:{
	  type: DataTypes.BOOLEAN,
	  defaultValue: false
    }
});

 export const addOrUpdateShip=async (body:any)=>{
  const ship=await Ship.findByPk(body.id);
  if (ship){
    ship.set(body)
    return ship.save()
  } else{
    return await Ship.create(body)
  }
 
 }

 export const getDataForSeaberPush=async()=>{
   
  return await Ship.findAll({
  where: {
   is_send:false,
   cargo_type:{ [Op.ne]:null},
   cargo_amount:{ [Op.ne]:null},
   from:{ [Op.ne]:null},
   to:{ [Op.ne]:null}
  }
});
 }

 export const updateStatusByIds=async(ids:any)=>{
   return await Ship.update({ is_send: true }, {
      where: {
      id: {[Op.in]:ids}
    }
  });
 }