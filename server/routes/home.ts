import { Router } from 'express'

import * as db from '../db/squirrels.queries.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const sqrrls = await db.getAllSquirrels()
    console.log('Backend: ', { sqrrls })
    res.json({ sqrrls })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router

//try catch api things here that call db functions in dbcalls.ts
