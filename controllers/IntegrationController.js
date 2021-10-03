
import integration from '../models/Integration';
import axios from 'axios';
import createXml from '../helpers/createXml';
import DateTime from '../helpers/DateTime';

class IntegrationController {

   
  //lista todas as itegracoes do banco

   async show(req,res){
    
    const result = await integration.find();

    return res.json(result);


   }

    
   async index(req,res){
    
    const {data,value} = req.query;
    const filter = {data,value};
    
    if(data === undefined) delete filter.data
    if(value === undefined) delete filter.value

    const result = await integration.find(filter);

    return res.json(result);


   }

   

    async store(req,res){
       
        
       const pipe = axios.create({
           baseURL:process.env.PIPE_BASE
       })
       
       const bling = axios.create({
           baseURL:process.env.BLING_BASE
       })

       var config = {
        headers: {'Content-Type': 'application/xml'}
        };


      pipe.get(`/api/v1/deals:(id,title,value,currency,status,user_id)/?status=won&api_token=${process.env.PIPE_TOKEN}`)
      .then((response) =>{
        
        /**/
        
        
        const data = response.data['data'];
        
        if(data == undefined ){ 
            return res.json({'ok':'nao foi possivel retornar os valores'});
        }    

        data.forEach(element => {
       
            const {title,value,status} = element
            const {name,email,id} = element['user_id']
        
            if(title == undefined || value == undefined || status == undefined || name == undefined || email == undefined || id == undefined){
    
                return res.json({'error':'nao foi possivel retornar os valores'});
            } 


            
        
                const xml =createXml.generate(title,value,status,name,email,id);
        
            
        
        
                bling.post(`/Api/v2/pedido/json/?apikey=${process.env.BLING_TOKEN}&xml=${encodeURI(xml)}`,{},config)
                .then((response) =>{
                   
                    if(response.data['retorno']['pedidos'] !== undefined){
                       
                        //salvar no Mongodb
                         const {idPedido,numero} = response.data['retorno']['pedidos'][0]['pedido']   

                          const payload = {
                             'idPedido':idPedido,   
                             'numero':numero,
                             'title' : title,
                             'value':value,
                             'userName':name,
                             'email':email,
                             'data':DateTime.now()   
                             
                          }  

                          integration.create(payload).catch((err) => {
                            return res.json({"error":err});
                         });

                    }
                   

                })
               .catch((err) => {
                return res.json({"error":err});
             });
             
            
                
       
        });


        
        return res.json({'ok':'integraçao comcluida!'});
       
       
       
      })
      .catch((err) => {
        return res.json({"error":'não foi possivel executar esta ação'});
     });
     
        
        
    }

}

export default new  IntegrationController();