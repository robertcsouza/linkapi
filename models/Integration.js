import  { Schema, model } from 'mongoose';


const IntegrationSchema = new Schema({

        idPedido:Number,
        numero:String,
        title:String,
        value:Number,
        userName:String,
        email:String,
        data:String

        }  

);


export default model('Integration',IntegrationSchema);