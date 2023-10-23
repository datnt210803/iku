import Category from "../models/categories"
import Joi from "joi"


const categorySchema = Joi.object({
    name: Joi.string().required().messages({
        "string.empty": "{#label} Trường dữ liệu bắt buộc"
    }),
   
})

export const get = async (req, res) => {
    try {
        const data = await Category.find()
        res.send(data)
    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}

export const getById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Category.findById(id)
        res.send(data)
    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}

export const create = async (req, res) => {
    try {
        const body = req.body
        const { error } = categorySchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message,
            })
        } else {
            const data = await Category.create(body)
            res.send(data)
        }

    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const { error } = categorySchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message,
            })
        } else {
            const data = await Category.findByIdAndUpdate(id, body)
            if (data) {
                res.send(data)
            } else {
                res.status(400).send({
                    message: "Product is not existed"
                })
            }
        }
    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}

export const remove = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Category.findByIdAndRemove(id)
        if (data) {
            res.send(data)
        } else {
            res.status(400).send({
                message: "Product is not existed"
            })
        }

    } catch (err) {
        res.status(500).send({
            message: err
        })
    }
}



 