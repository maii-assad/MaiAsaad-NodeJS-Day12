const {UsersData} = require('../models/users')
const {tokenData} = require('../models/token');



const getAllProducts = async (req, res) => {
    try {
      const products = await productData.find()
      res.json(products)
    } catch (error) {
      res.status(500).json({ message: "Error fetching products", error: error.message })
    }
}


const addProduct = async (req, res) => {
    try {
      const { description, price, id, title, quantity } = req.body

      if (!description || !price || !id || !title || !quantity) {
        return res.status(400).json({ message: "All fields are required" })
      }
      const newProduct = new productData({ description, price, id, title, quantity })
      await newProduct.save();

      res.status(201).json({ message: "Product added", product: newProduct })

    } catch (error) {
      res.status(500).json({ message: "Error at adding product", error: error.message })
    }
  }


const getProductById = async (req, res) => {
    try {
      const product = await productData.findById(req.params.id)

      if (!product) {
        return res.status(404).json({ message: "Product not found" })
      }
      return res.json(product)

    } catch (error) {
      res.status(500).json({ message: "Error fetching product", error: error.message })
    }
  }


const deleteProduct = async (req, res) => {
    try {
      const product = await productData.findByIdAndDelete(req.params.id)

      if (!product) {
        return res.status(404).json({ message: "Product not found" })
    }

    return res.json({ message: "Product deleted", product })

    } catch (error) {
      return res.status(500).json({ message: "Error deleting product", error: error.message })
    }
}


const updateProduct = async (req, res) => {
    try {
      const { description, price, title, quantity } = req.body

      const updatedProduct = await productData.findByIdAndUpdate(req.params.id, { description, price, title, quantity },{ new: true } )
  
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" })
    }
      return res.json({ message: "Product updated", product: updatedProduct })

    } catch (error) {
      res.status(500).json({ message: "Error updating product", error: error.message })
    }
}

module.exports = { getAllProducts, addProduct, getProductById, deleteProduct, updateProduct}


