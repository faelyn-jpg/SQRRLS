import { Router } from 'express';
import * as db from '../db/squirrels.queries.ts'

const router = Router()

// Route to get all squirrels
router.get('/', async (req, res) => {
    try {
        const sqrls = await db.getAllSquirrels();
        res.json({ squirrels: sqrls.map((s) => s.name) })
    } catch (error) {
        console.error("Error fetching squirrels:", error)
        res.status(500).json({ message: 'Something went wrong' })
    }
})

// Route to get a squirrel by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const squirrel = await db.getSquirrelById(id)
        if (squirrel) {
            res.json(squirrel)
        } else {
            res.status(404).json({ message: "Squirrel not found" })
        }
    } catch (error) {
        console.error("Error fetching squirrel by ID:", error)
        res.status(500).json({ message: 'Error fetching squirrel' })
    }
})

export default router
