import App from 'app'
import 'dotenv/config'
import 'module-alias/register'
import { Enviroment } from '@/utils/config/env.config'


const app = new App([], Enviroment.APP.PORT)

app.listen()