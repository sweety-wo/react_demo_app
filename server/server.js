import express from 'express';

const app = express();
const port = process.env.PORT || 3008;
const apiRouter = express.Router();

apiRouter.all('/*', (req, res, next) => {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
 res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");

 next();
 });

 /**
 * /api router
 */
/** Clients */
let entitiesClients = require('./entity/clients.json');
apiRouter.get('/clients', (req, res) => res.json(entitiesClients));
apiRouter.put('/clients', (req, res) => {
    const lastId = entitiesClients.length ? entitiesClients[entitiesClients.length - 1]["id"] : -1;
    entitiesClients.push({id: lastId + 1, value: randomString(32)});
    res.json(entitiesClients);
});
apiRouter.delete('/clients/:id', (req, res) => {
    entitiesClients = entitiesClients.filter(item => item.id != req.params["id"]);
    res.json(entitiesClients);
});

/** Products */
let entitiesProducts = require('./entity/products.json');
apiRouter.get('/products', (req, res) => res.json(entitiesProducts));
apiRouter.put('/products', (req, res) => {
    const lastId = entitiesProducts.length ? entitiesProducts[entitiesProducts.length - 1]["id"] : -1;
    entitiesProducts.push({id: lastId + 1, value: randomString(32)});
    res.json(entitiesProducts);
});
apiRouter.delete('/products/:id', (req, res) => {
    entitiesProducts = entitiesProducts.filter(item => item.id != req.params["id"]);
    res.json(entitiesProducts);
});

/** inject:route */

app.use('/api', apiRouter);

const server = app.listen(port, () => {
    var data = server.address();
    data["host"] = "http://localhost";
    const { host, port } = data;

    console.log('Example app listening at http://%s:%s', host, port)
});

function randomString(length) {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result  = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}