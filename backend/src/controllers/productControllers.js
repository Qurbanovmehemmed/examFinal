import mongoose from "mongoose";
import product from "../models/productModels.js";

export const addProduct = async (req, res) => {
    try {

        const newProduct = new product(req.body)

        await newProduct.save()
        return res.status(201).json({ success: true, message: "product added" })

    } catch (error) {
        return res.status(500).json({ success: false, message: "invalid server error" })

    }
}



export const getProduct = async (req, res) => {
    try {

        const products = await product.find()

        return res.status(200).json({ success: true, products })

    } catch (error) {
        return res.status(500).json({ success: false, message: "invalid server error" })

    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {

        const deletedProduct = await product.findByIdAndDelete(id)
        if (!deletedProduct) {

            return res.status(400).json({ success: false, message: "product not found" })
        }

        return res.status(200).json({ success: true, message: "product deleted" })

    } catch (error) {
        return res.status(500).json({ success: false, message: "invalid server error" })

    }
}