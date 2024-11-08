import { Router } from 'express'
import * as db from '../db/squirrels.queries.ts'

const router = Router()

router.get('/', async (req, res) => {
  const { sqrrlClass } = req.body
  let classes: string[] = []
  switch (sqrrlClass) {
    case 'A':
      classes = ['A', 'B']
      break
    case 'B':
      classes = ['A', 'C']
      break
    case 'C':
      classes = ['B', 'C', 'E']
      break
    case 'D':
      classes = ['D']
      break
    case 'E':
      classes = ['C']
      break
  }
  try {
    const sqrrls = await db.getSquirrelsByClass(classes)
    console.log('server thing' + sqrrls);
    
    res.json({ sqrrls })
  } catch (error) {
    console.error('Error fetching squirrels:', error)
    res.status(500).json({ message: 'Error fetching squirrels' })
  }
})

export default router
