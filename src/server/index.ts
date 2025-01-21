import express from 'express'
import home from '../endpoint/home'
import upload from '../endpoint/upload'
import register from '../endpoint/register'
import login from '../endpoint/login'
import dotenv from 'dotenv'
import { logger } from '../fn/logger'
import { connectdb } from '../void/connect'
import PostSchema from '../schema/PostModel'
import {RESOURCE_PATH} from '../constants'

const app = express()

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(RESOURCE_PATH))

app.use('/', home)
app.post('/upload', upload)
app.post('/login', login)
app.post('/register', register)
app.post('/logout', () => { })

app.listen(3001, () => {
    logger.debug("✔  La pagina ya cargo");
    connectdb(String(process.env.tok));
})