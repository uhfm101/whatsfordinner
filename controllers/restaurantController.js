const {Restaurant} = require('../models')
const categories = ['American', 'Fast Food']

module.exports.viewAll = async function(req, res, next) {
    const restaurants = await Restaurant.findAll()
    res.render('index', {restaurants});
}

module.exports.renderEditForm = async function(req, res, next){
    const restaurant = await Restaurant.findByPk(
        req.params.id
    );
    res.render('edit', {restaurant, categories})
}

module.exports.updateRestaurant = async function(req, res){
    await Restaurant.update(
        {
            name: req.body.name,
            category: req.body.category,
            image: req.body.image,
            rating: req.body.rating,
            description: req.body.description
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
}

module.exports.deleteRestaurant = async function(req, res){
    await Restaurant.destroy(
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/')
}

module.exports.renderAddForm = async function(req, res){
    const restaurant = {
        name: "",
        description: "",
        rating: 1,
        image: "",
        category: categories[0],
    };
    res.render('add', {restaurant, categories})
}

module.exports.addForm = async function(req, res){
    await Restaurant.create
}