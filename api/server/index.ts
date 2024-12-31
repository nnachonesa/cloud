import express from 'express'
import home from '../endpoint/home'
import upload from '../endpoint/upload'
import register from '../endpoint/register'
import login from '../endpoint/login'
import dotenv from 'dotenv'
import { logger } from '../fn/logger'
import { connectdb } from '../void/connect'


const app = express()

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', home)
app.post('/upload', upload)
app.post('/login', login)
app.post('/register', register)
app.post('/logout', () => { })
app.get('/prot', () => { })

app.listen(3001, () => {
    logger.debug("✔  La pagina ya cargo");
    connectdb(String(process.env.tok));
})
