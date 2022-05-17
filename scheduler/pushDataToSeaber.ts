const schedule = require('node-schedule');
import {getDataForSeaberPush,updateStatusByIds} from '../models/models'
import {pushToSeaber} from '../utils/httpUtils'

export const pushDataToSeaberJob = async()=>{

schedule.scheduleJob('*/1 * * * *',async function(){
    let integData=await getDataForSeaberPush()
    integData=integData.map((data:any)=>data.dataValues)
    console.log(integData)
    let integStatus=await pushToSeaber(integData);
    if(integStatus){
      let ids=integData.map((data:any)=>data.id)
      await updateStatusByIds(ids);
    }
  
  
})};