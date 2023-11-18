const routerPlatos = require('./platosRouter')

function routersAPI(app){
    app.use('/platos', routerPlatos);
}

module.exports = routersAPI