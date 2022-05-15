const axios = require('axios').default;

const baseUrl="localhost:3030"

export const pushToSeaber=async (data:any)=>
{
    let integ_url=baseUrl+'ship_info'
    try {
        // const response = await axios.post(integ_url, data);
        // return response;
        //TO=DO:need to implement a endpoint in Seaber. here just returning true to simulate the response.
        return true
    }
    catch (error:any) {
        return error.response;
    }
}