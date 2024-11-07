//all squirrel table related db queries go here
// import {Knex}  from 'knex'
import connection from './connection.ts'
import { Squirrel } from '../../models/squirrel.ts'

export async function getAllSquirrels(db = connection): Promise<Squirrel[]> {
  return await db('squirrels').select('*')
}

export async function getSquirrelById(id: number|string): Promise<Squirrel> {

  const sqrl = await connection('squirrels')
    .where('id',id)
    .select('id','name','class','catch_phrase','bio')
    .first()
  return sqrl
}