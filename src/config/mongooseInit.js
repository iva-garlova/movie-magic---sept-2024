import {connect} from "mongoose";

const dbUrl = 'mongodb://localhost:27017';

export default async function mongooseInit(){

try {
    await connect(dbUrl);
    console.log('Succesfully connected to db');
    
} catch (err) {
    console.log('Cannot connect to db' + err.message);
    
}
}