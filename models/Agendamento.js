import  { Schema, model } from 'mongoose';


const AgendamentoSchema = new Schema({

        teste:String,


        }  

);


export default model('Agendamento',AgendamentoSchema);