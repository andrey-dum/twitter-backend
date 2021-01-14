import express from 'express';
import expressValidator from 'express-validator';
import dotenv from 'dotenv'

import './core/db'

import { registerValidations } from './validations/register';
import { UserCtrl } from './controllers/UserController';


const app = express()
dotenv.config()
app.use(express.json())

app.get('/users', UserCtrl.index)
app.post('/users', registerValidations, UserCtrl.create)
// app.patch('/users', UserCtrl.update)
// app.delete('/users', UserCtrl.delete)

app.listen(8888, () => {
    console.log('Server is running...');
})