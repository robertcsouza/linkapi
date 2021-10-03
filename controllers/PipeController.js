

import axios from 'axios';


class PipeController {

   
  //lista todas as itegracoes do banco



    
   async index(req,res){
    
       
    const pipe = axios.create({
        baseURL:process.env.PIPE_BASE
    });

    pipe.get(`/api/v1/deals:(id,title,value,currency,status,user_id)/?status=won&api_token=${process.env.PIPE_TOKEN}`)
    .then((response) =>{
            
        return res.json(response.data);

   }).catch((err) => {
    return res.json({"error":'nao foi possivel executar a ação'});
 });
        
    }

 
}

export default new  PipeController();