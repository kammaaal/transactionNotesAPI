const express = require('express')
const bodyParser = require('body-parser')

const rootRoute = require('./routes/rootRoute')
const signinRoute = require('./routes/signinRoute')
const signupRoute = require('./routes/signupRoute')

const addProductsRoute = require('./routes/products/addProducts')
const getProductsRoute = require('./routes/products/getProducts')
const addPromosRoute = require('./routes/promos/addPromos')
const getPromosRoute = require('./routes/promos/getPromos')
const addTransactionsRoute = require('./routes/transactions/addTransactions')
const getTransactionsRoute = require('./routes/transactions/getTransactions')

const app = express()
app.use(bodyParser.json())

app.use(rootRoute)
app.use(signinRoute)
app.use(signupRoute)

app.use(addProductsRoute)
app.use(getProductsRoute)
app.use(addPromosRoute)
app.use(getPromosRoute)
app.use(addTransactionsRoute)
app.use(getTransactionsRoute)

const port = 3000
app.listen(port, () => {
    console.log(`Backend app is running in http://localhost:${port}`);
})