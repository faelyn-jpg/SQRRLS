//This file should only be responsible for setting-up and exporting the db connection
import knex from 'knex'
import config from './knexfile.js'

type Environment = 'development' | 'production' | 'test'
const env = (process.env.NODE_ENV as Environment) || 'development'

const connection = knex(config[env])

export default connection