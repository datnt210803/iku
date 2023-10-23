import Product from "../models/products"
import Joi from "joi"


const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    desc: Joi.string().required(),
    category: Joi.string().required(),
    image: Joi.string().required()
    
})

export const get = async (req, res) => {
    try {
        const data = await Product.find()
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
        const data = await Product.findById(id)
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
        const { error } = productSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message,
            })
        } else {
            const data = await Product.create(body)
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
        const { error } = productSchema.validate(body)
        if (error) {
            res.status(400).send({
                message: error.message,
            })
        } else {
            const data = await Product.findByIdAndUpdate(id, body)
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
        const data = await Product.findByIdAndRemove(id)
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



 