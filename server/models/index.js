const User = require ('./user')
const Review = require ('./review')
const Product = require('./product')

// db associations 
User.hasMany(Product)
Product.belongsTo(User)

User.hasMany(Review)
Review.belongTo(User)

Product.hasMany(Review)
Review.belongsTo(Product)

module.exports = {
    User,
    Review, 
    Product
}