module.exports = {
    PORT: process.env.PORT || 7777,
    DB_CONNECT: 'mongodb+srv://abdulhay7772019:aNXyH78WqBK6zQ4J@taskpal.tjiimop.mongodb.net/test-app',
    JWT: 'dev',
    JWT_time: (60 * 60) * 24,
    corsOptions: {
        origin: '*',
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        optionsSucccessStatus: 200,
        credentials: true,
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'X-Requested-With',
            'device-remember-token',
            'Access-Control-Allow-Origin',
            'Origin',
            'Accept',
        ],
    }
}
