import app from '../src/app';
import Agendamento from '../models/Agendamento';
import axios from 'axios';
class IntegrationController {

   // data tipo horario user_id

    

    async store(req,res){
       const pipe = axios.create({
        baseURL:process.env.PIPE_BASE
       }); 

       pipe.get("/api/v1/deals/?status=won&api_token=38a337d8baebabaf9b66740a2358178d1a62d293")
      .then((response) =>{

        return res.json(response.data);

      })
      .catch((err) => {
        return res.json({"error":process.env.PIPE_TOKEN});
     });
     
        
        
    }
}

export default new  IntegrationController();