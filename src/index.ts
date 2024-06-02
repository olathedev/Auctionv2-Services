import App from './app'
import 'dotenv/config'
import PropertyController from './controllers/property.controller'
import { Enviroment } from './utils/config/env.config'


const app = new App([new PropertyController()], Enviroment.APP.PORT)



app.listen()