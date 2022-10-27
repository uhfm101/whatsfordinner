module.exports.viewAll = function(req, res, next) {
    const restraurant = {
        id: 1,
        name: 'Texas RoadHouse',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/4bD8djZmb7a0odhXzGlD1w/l.jpg',
        rating: 2,
        category: 'American',
        description: 'sdyrhhyytujjtfjfjjytfjj ewrhgrwtjhertyjhrtrtjhe sdyrhhyytujjtfjfjjytfjj ewrhgrwtjhertyjhrtrtjhe sdyrhhyytujjtfjfjjytfjj ewrhgrwtjhertyjhrtrtjhe'
    }
    res.render('index', {restraurant});
}