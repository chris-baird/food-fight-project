var Business = require('../models/business');
var User = require('../models/user');

module.exports = {
  addBiz
}

function addBiz(req, res) {
  Business.findOne({yelp_id: req.body.yelp_id}, function(err, biz){
    if (biz) {
      console.log('biz exists!');
      if(!req.user.favorites.some(fav => fav.equals(biz._id))) {
        console.log('adding to User Favs')
        req.user.favorites.push(biz._id);
        req.user.save(function(err) {
          console.log(err);
          // res.render()
        });
      }
    } else {
      console.log('biz does not exist, adding');
      Business.create(req.body, function(err, biz){
        if(!req.user.favorites.some(fav => fav.equals(biz._id))) {
          console.log('adding to User Favs')
          req.user.favorites.push(biz._id);
          req.user.save(function(err) {
            console.log(err);
            // res.render()
          });
        }
      });
    }
  });
}
