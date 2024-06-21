import App from './app'
import 'dotenv/config'
import PropertyController from './controllers/property.controller'
import { Enviroment } from './utils/config/env.config'
import AuthController from './controllers/auth.controller'


const app = new App([new PropertyController(), new AuthController()], Enviroment.APP.PORT)



app.listen()