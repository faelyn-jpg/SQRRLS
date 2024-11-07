import { Router } from 'express'

import * as db from '../db/fruits.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const fruits = await db.getAllFruits()

    res.json({ fruits: fruits.map((fruit) => fruit.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router

//try catch api things here that call db functions in ___.ts
