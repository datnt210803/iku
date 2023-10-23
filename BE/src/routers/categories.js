import express from "express";
import { create, get, getById, remove, update } from "../controllers/categories";

const categoryRouter = express.Router()

categoryRouter.get('/categories', get)
categoryRouter.get('/categories/:id', getById)
categoryRouter.post('/categories', create)
categoryRouter.put('/categories/:id', update)
categoryRouter.delete('/categories/:id', remove)

export default categoryRouter 