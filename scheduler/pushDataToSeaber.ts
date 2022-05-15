const schedule = require('node-schedule');
import {getDataForSeaberPush,updateStatusByIds} from '../models/models'
import {pushToSeaber} from '../utils/httpUtils'

export const pushDataToSeaberJob = async()=>{

schedule.scheduleJob('*/1 * * * *',async function(){
  console.log('The answer to life, the universe, and everything!');
  let integData=await getDataForSeaberPush()
  integData=integData.map((data:any)=>data.dataValues)
//   for(var i = 0; i < integData.length; i++) {
//     var obj = integData[i];

//     console.log({...obj.dataValues});
// }

console.log(integData)
let integStatus=await pushToSeaber(integData);
if(integStatus){
  let ids=integData.map((data:any)=>data.id)
  await updateStatusByIds(ids);
}
  
  
})};