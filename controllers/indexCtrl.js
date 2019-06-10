var indexModel = require('../models/indexModel.js')

module.exports = {
  showIndexPage(req,res){ 

    indexModel.getIndexPageData((err,result)=>{
      if(err) return res.send('404')

      
       res.render('index', {
         isLogin: req.session.isLogin,
         ...result[0][0],
         ...result[1][0],
         ...result[2][0],
         ...result[3][0],
         ...result[4][0]
       })
    })
  }
}