import { Router } from 'express'
import * as db from '../db/squirrels.queries.ts'

const router = Router()

// Route to get all squirrels
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

// Route to get a squirrel by ID
router.get('/:id', async (req, res) => {
  // const id = Number(req.params.id)
  const {id} = req.params
  try {
    const squirrel = await db.getSquirrelById(id)

    if (!squirrel) { res.status(404).json({ message: 'Squirrel not found' })
    } else { res.status(200).json(squirrel)
    }
  } catch (error) {
    console.error('Error fetching squirrel by ID:', error)
    res.status(500).json({ message: 'Error fetching squirrel' })
  }
})

export default router
