import connection from './connection.ts'
import { Squirrel } from '../../models/squirrel.ts'

export async function getAllSquirrels(db = connection): Promise<Squirrel[]> {
  return await db('squirrels').select('*')
}

//database calls go here