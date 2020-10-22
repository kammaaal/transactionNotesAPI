const express = require('express')
const bodyParser = require('body-parser')

const rootRoute = require('./routes/rootRoute')
const signInRoute = require('./routes/signInRoute')
const signUpRoute = require('./routes/signUpRoute')

const addProductsRoute = require('./routes/products/addProducts')
const getProductsRoute = require('./routes/products/getProducts')
const addPromosRoute = require('./routes/promos/addPromos')
const getPromosRoute = require('./routes/promos/getPromos')
const addWishlistRoute = require('./routes/wishlist/addWishlist')
const getWishlistRoute = require('./routes/wishlist/getWishlist')
const addTransactionsRoute = require('./routes/transactions/addTransactions')
const getTransactionsRoute = require('./routes/transactions/getTransactions')
const addPostTransactionsRoute = require('./routes/postTransactions/addPostTransactions')
const getPostTransactionsRoute = require('./routes/postTransactions/getPostTransactions')

const app = express()
app.use(bodyParser.json())

app.use(rootRoute)
app.use(signInRoute)
app.use(signUpRoute)

app.use(addProductsRoute)
app.use(getProductsRoute)
app.use(addPromosRoute)
app.use(getPromosRoute)
app.use(addWishlistRoute)
app.use(getWishlistRoute)
app.use(addTransactionsRoute)
app.use(getTransactionsRoute)
app.use(addPostTransactionsRoute)
app.use(getPostTransactionsRoute)

const port = 3000
app.listen(port, () => {
    console.log(`Backend app is running in http://localhost:${port}`);
})