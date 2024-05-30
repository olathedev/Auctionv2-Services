import App from 'app'
import 'dotenv/config'
import 'module-alias/register'


const app = new App([], Number(process.env.PORT))

app.listen()