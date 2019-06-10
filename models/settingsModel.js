const conn = require('./baseDB')

module.exports = {
  getNavMenusData(callback){
    let sql = "select `value` from options where `key` = 'nav_menus'";

    conn.query(sql,(err,results)=>{
      if(err) return callback(err)

      callback(null,results)
    })
  },
  addNewNavMenus(nav,callback){
    this.getNavMenusData((err,results)=>{
      if(err) return callback(err)

      let arr = JSON.parse(results[0]['value'])
      arr.push(nav)
      let str = JSON.stringify(arr)

      let sql = "update options set `value` = ? where `key` = 'nav_menus';"
      conn.query(sql,[str],(err,results)=>{
        if(err) return callback(err)

        callback(null,results)
      })
    })
  },
  delNavMenusByIndex(index,callback){
    this.getNavMenusData((err,results)=>{
      if(err) return callback(err)

      let arr =JSON.parse(results[0]['value'])
      arr.some((item,ind)=>{
        if(ind == index){
          arr.splice(ind,1)
          return true
        }
      })

      let str = JSON.stringify(arr)

      let sql = "update options set `value` = ? where `key` = 'nav_menus'"

      conn.query(sql,[str],(err,results)=>{
        if(err) return callback(err)

        callback(null)
      })
    })
  },
  getSlidesData(callback){
    let sql = "select `value` from options where `key` = 'home_slides'"

    conn.query(sql,(err,results)=>{
      if(err) return callback(err)

      callback(null,results)
    })
  },
  addNewSlides(slides,callback){
    this.getSlidesData((err,data)=>{
      if(err) return callback(err)

      let arr = JSON.parse(data[0]['value'])
      arr.push(slides)
      // let str = JSON.stringify(arr)

      // let sql = "update options set `value` = ? where `key` = 'home_slides'"

      // conn.query(sql,[str],(err,results)=>{
      //   if(err) return callback(err)

      //   callback(null,results)
      // })
       this.updateValueInfoByParams(arr, 'home_slides', callback)
    })
  },
  updateValueInfoByParams(arr,key,callback){
    let str = JSON.stringify(arr)

    let sql = "update options set `value` = ? where `key` = ?;"

    conn.query(sql,[str,key],(err,results)=>{
      if(err) return callback(err)

      callback(null,results)
    })
  },
  delSlidesByIndex(index,callback){
    this.getSlidesData((err,results)=>{
      if(err) return callback(err)

      let arr = JSON.parse(results[0]['value'])

      arr.splice(index,1)

      this.updateValueInfoByParams(arr,'home_slides',callback)
    })
  },
  
}