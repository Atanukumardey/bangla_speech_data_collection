export default {
    development: {
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_NAME,
        host: process.env.DEV_DB_HOSTNAME,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    },
    test: {
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_NAME,
        host: process.env.DEV_DB_HOSTNAME,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    },
    staging: {
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_NAME,
        host: process.env.DEV_DB_HOSTNAME,
        port: process.env.DB_PORT,
        logging: false,
        dialect: process.env.DB_DIALECT,
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        logging: false,
        dialect: process.env.DB_DIALECT,
        ssl: true,
        dialectOptions: {
            ssl: {
                require: true
            }
        }
    },
    awsdbproduction: {
        username: process.env.AWS_DB_NAME,
        password: process.env.AWS_DB_PASSWORD,
        database: process.env.AWS_DB_NAME,
        host: process.env.AWS_DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
         },
    }
};