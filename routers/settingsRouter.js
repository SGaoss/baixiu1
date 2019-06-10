const settingsCtrl = require('../controllers/settingsCtrl')

const express = require('express')

const router = express.Router()

router.get('/nav-menus',settingsCtrl.showNavMenusPage)
      .get('/getNavMenusData',settingsCtrl.getNavMenusData)
      .post('/addNewNavMenus',settingsCtrl.addNewNavMenus)
      .get('/delNavMenus',settingsCtrl.delNavMenusByIndex)
      .get('/slides',settingsCtrl.showSlidesPage)
      .get('/getSlidesData',settingsCtrl.getSlidesData)
      .post('/addNewSlides',settingsCtrl.addNewSlides)
      .get('/delSlides',settingsCtrl.delSlidesByIndex)
      .get('/settings', settingsCtrl.showSettingsPage)
module.exports = router