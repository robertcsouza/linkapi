import { Router } from 'express';

import IntegrationController from '../controllers/IntegrationController';



const routes = new Router();



routes.get('/', (req, res)=>{
  
    return res.json({ ok:true});
});





routes.post('/integration', IntegrationController.store);

//routes.post('/mongo', IntegrationController.mongo);

//routes.post('/agendamentos', IntegrationController.indexById);

//routes.delete('/agendamentos', IntegrationController.destroy);

//routes.get('/agendamentos',IntegrationController.index);





export default routes;