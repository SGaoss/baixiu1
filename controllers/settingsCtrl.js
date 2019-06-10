const settingsModel = require('../models/settingsModel')

module.exports = {
  showNavMenusPage(req,res){
    res.render('nav-menus',{isLogin:req.session.isLogin})
  },
  getNavMenusData(req,res){
   
      settingsModel.getNavMenusData((err, result) => {
            if (err) return res.json({
              "code": 1,
              "msg": "查询数据失败"
            })
            // console.log(result[0].value);
            var sb = JSON.parse(result[0].value)
            console.log(sb);
            
            res.json({
              "code": 0,
              "msg": "查询数据成功",
              "data": JSON.parse(result[0].value)
            })
        })
 
  },
  addNewNavMenus(req,res){
    let nav = req.body;
    console.log(nav);

    settingsModel.addNewNavMenus(nav,result=>{
       if (result) return res.json({
         "code": 1,
         "msg": "添加失败"
       })

       res.json({
         "code": 0,
         "msg": "添加成功"
       })
    })
    
  },
  delNavMenusByIndex(req,res){
    let {index} = req.query
    settingsModel.delNavMenusByIndex(index,result=>{
       if (result) return res.json({
         "code": 1,
         "msg": "删除导航项失败"
       })

       res.json({
         "code": 0,
         "msg": "删除导航项成功"
       })
    })
  },
  showSlidesPage(req,res){
    res.render('slides',{isLogin:req.session.isLogin})
  },
  getSlidesData(req,res){
    settingsModel.getSlidesData((err,result)=>{
       if (err) return res.json({
         "code": 1,
         "msg": "查询数据失败"
       })
       // console.log(result[0].value);
       res.json({
         "code": 0,
         "msg": "查询数据成功",
         "data": JSON.parse(result[0].value)
       })
    })
  },
  addNewSlides(req,res){
    let slides = req.body

    settingsModel.addNewSlides(slides,result=>{
       if (result) return res.json({
         "code": 1,
         "msg": "添加失败"
       })

       res.json({
         "code": 0,
         "msg": "添加成功"
       })
    })
  },
  delSlidesByIndex(req,res){
    let {index} = req.query
    settingsModel.delSlidesByIndex(index,result=>{
       if (result) return res.json({
         "code": 1,
         "msg": "删除失败"
       })

       res.json({
         "code": 0,
         "msg": "删除成功"
       })
    })
  },
  showSettingsPage(req,res){
     res.render('settings', {
       isLogin: req.session.isLogin
     })
  }
}