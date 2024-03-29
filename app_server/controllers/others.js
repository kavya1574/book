module.exports.about=function(req,res){
    res.render('about',{title:'about',
content:'this is about page'});

};
module.exports.contact = function(req, res){
    res.render('contact', { title: 'contact' });
  };