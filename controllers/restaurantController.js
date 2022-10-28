module.exports.viewAll = function(req, res, next) {
    const restaurants =[ {
        id: 1,
        name: 'Texas RoadHouse',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/4bD8djZmb7a0odhXzGlD1w/l.jpg',
        rating: 2,
        category: 'American',
        description: 'sdyrhhyytujjtfjfjjytfjj ewrhgrwtjhertyjhrtrtjhe sdyrhhyytujjtfjfjjytfjj ewrhgrwtjhertyjhrtrtjhe sdyrhhyytujjtfjfjjytfjj ewrhgrwtjhertyjhrtrtjhe'
    }, { id: 2,
            name: 'wreqgf',
            image: 'https://s3-media0.fl.yelpcdn.com/bphoto/4bD8djZmb7a0odhXzGlD1w/l.jpg',
            rating: 4,
            category: 'rqg',
            desciption: 'rwgqew',
        }];
    res.render('index', {restaurants});
}