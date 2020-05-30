const app = getApp()

Page({
  data: {
    bookid: {},
    targetbook: {}
  },

  onLoad: function(options){
    var bookid = options.bookid;
    console.log(options)
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Booklist', 
      method: "GET",
      header: {
      'content-type': 'application/json' // 默认值
      },
      success(res){
        for (let item of res.data){
          if(bookid==item.id){
            that.setData({
              targetbook: item
            })
          }
        }
      }
    })
  },

  //这里也有点问题，总会回到初始页面
  onUnload: function(){
    wx.navigateBack({
      delta: 1
    })
  },


})