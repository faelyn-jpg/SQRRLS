import { Router } from 'express'
import * as db from '../db/squirrels.queries.ts'

const router = Router()

router.get('/:sqClass', async (req, res) => {
  const sqrrlClass = req.params.sqClass
  let classes: string[] | string = []
  switch (sqrrlClass) {
    case 'A':
      classes = 'AB'
      break
    case 'B':
      classes = 'AC'
      break
    case 'C':
      classes = 'BCE'
      break
    case 'D':
      classes = 'D'
      break
    case 'E':
      classes = 'C'
      break
  }
  try {
    console.log('array classes' + classes)

    const sqrrls = await db.getSquirrelsByClass([...classes])

    res.json({ sqrrls })
  } catch (error) {
    console.error('Error fetching squirrels:', error)
    res.status(500).json({ message: 'Error fetching squirrels' })
  }
})

export default router
