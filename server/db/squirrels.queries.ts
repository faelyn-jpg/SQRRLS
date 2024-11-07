//all squirrel table related db queries go here
// import {Knex}  from 'knex'
import connection from './connection.ts'
import { Squirrel } from '../../models/squirrel.ts'

export async function getAllSquirrels(db = connection): Promise<Squirrel[]> {
  return await db('squirrels').select('*')
}
//MF! why!! ^^Type 'QueryBuilder' is missing the following properties from type 'Squirrel[]': length, pop, push, concat, and 28 more.ts(2740)