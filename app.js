const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express()


//middleware
app.use(express.json());

app.use(express.urlencoded({extended: true}))


//rotas
const routerpet = require('./routes/petRouter.js')
app.use('/api/pet', routerpet)

const routertutor = require('./routes/tutorRouter.js')
app.use('/api/tutor', routertutor)

const routeraltura = require('./routes/alturaRouter.js')
app.use('/api/altura', routeraltura)

const routerLogin = require('./routes/authRouter.js')
app.use('/auth', routerLogin)


//porta

const PORT = process.env.PORT || 5000

//  servidor

app.listen(PORT, ()=>{
    console.log('rodando pae')
})