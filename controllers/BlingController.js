

import axios from 'axios';


class BlingController {
   
   async index(req,res){
    
       
    const bling = axios.create({
        baseURL:process.env.BLING_BASE
    })

    bling.get(`/Api/v2/pedidos/json/?apikey=${process.env.BLING_TOKEN}`)
    .then((response) =>{
            
        return res.json(response.data);

   }).catch((err) => {
    return res.json({"error":'nao foi possivel executar a ação'});
 });
        
    }

 
}

export default new  BlingController();
