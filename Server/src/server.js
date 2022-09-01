const http = require('http');
const PORT = process.env.PORT || 8000;

const app = require('./app')
const {loadPlannetsData} = require('./models/plannets.model')

const server = http.createServer(app);

async function startServer() {
    await loadPlannetsData();

    server.listen(PORT,() => {
        console.log(`Listning on Port ${PORT}`);
    })
}

startServer();