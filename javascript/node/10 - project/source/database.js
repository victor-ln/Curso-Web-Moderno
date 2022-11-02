const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const products = {}

function saveProduct(product) {
    if (!product.id)
        product.id = sequence.id
    products[product.id] = product
    return product
}

function getProductById(id) {
    return products[id] || {}
}

function removeProductById(id) {
    const deleted = products[id];
    delete products[id];
    return deleted;
}

function getAllProducts() {
    return Object.values(products)
}

module.exports = {
    saveProduct,
    getProductById,
    getAllProducts,
    removeProductById
}
