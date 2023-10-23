import express from 'express'
import { signin, signup } from '../controllers/user'

const userRouter = express.Router()

userRouter.post('/signup', signup)
userRouter.post('/signin', signin)
userRouter.get("/users",)
userRouter.get("/users/:id",)
userRouter.delete("/users/:id",)
userRouter.put("/users/:id",)


export default userRouter