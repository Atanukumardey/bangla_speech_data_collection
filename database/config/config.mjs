// import * as pg from 'pg'
import pg from 'pg'

export default  {
    development: {
        database: process.env.DEV_DB_NAME,
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        host: process.env.DEV_DB_HOSTNAME,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        dialectModule: pg // for solving the issue of 
            // Server Error
            // Error: Please install pg package manually
    },
    test: {
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_NAME,
        host: process.env.DEV_DB_HOSTNAME,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        dialectModule: pg
    },
    staging: {
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_NAME,
        host: process.env.DEV_DB_HOSTNAME,
        port: process.env.DB_PORT,
        logging: false,
        dialect: process.env.DB_DIALECT,
        dialectModule: pg
    },
    // VERCEL DB
    // production: {
    //     username: process.env.DB_USER,
    //     password: process.env.DB_PASSWORD,
    //     database: process.env.DB_DATABASE,
    //     host: process.env.DB_HOST,
    //     port: process.env.DB_PORT,
    //     logging: false,
    //     dialect: process.env.DB_DIALECT,
    //     ssl: true,
    //     dialectModule: pg
    //     dialectOptions: {
    //         ssl: {
    //             require: true
    //         }
    //     }
    // },

    //AWS DB
    production: {
        username: process.env.AWS_DB_USER,
        password: process.env.AWS_DB_PASSWORD,
        database: process.env.AWS_DB_NAME,
        host: process.env.AWS_DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
        dialectModule: pg,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    }
};