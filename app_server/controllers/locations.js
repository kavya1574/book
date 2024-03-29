module.exports.home=function(req,res){
    res.render('home',{title:'Book review',
  pageHeader:{
    title:'BR',
    strapline:'Find the best book'
  },
  Books:[{
    name:'book1',
    description:'book1',
    rating:4.5,
    price:500
  },{
    name:'book2',
    description:'book2',
    rating:4,
    price:200
  },{
    name:'book2',
    description:'book2',
    rating:4.1,
    price:200
  }
  ]});

};
module.exports.book1= function(req, res){
    res.render('book1', { title: 'book1' ,Course: [
      {
        name: "book1",
        price: 500,
        description:123,
        rating: 5
      }]});
    };
    module.exports.book2= function(req, res){
        res.render('book2', { title: 'book2' ,Course: [
          {
            name: "book2",
            price: 500,
            description:123,
            rating: 5
          }]});
        };module.exports.book3= function(req, res){
            res.render('book3', { title: 'book3' ,Course: [
              {
                name: "book3",
                price: 500,
                description:123,
                rating: 5
              }]});
            };