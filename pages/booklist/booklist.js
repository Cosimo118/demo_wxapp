const app = getApp()

Page({

  data: {
    booklist : [],
  },

  onLoad: function(){
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Booklist', 
      method: "GET",
      header: {
      'content-type': 'application/json' // 默认值
      },
      success(res){
        var books = [];
        for (let item of res.data){
          books.push(item);
        }
        that.setData({
          booklist: books
        })
      }
      })

      
  },


  goToDetail: function(e){
    var viewId = e.target.id;
    console.log(viewId)
    wx.navigateTo({
      url: '../bookdetail/bookdetail?bookid='+viewId,
    })
  }
})