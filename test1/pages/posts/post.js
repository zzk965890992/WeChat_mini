Page({
  /**
   * 页面的初始数据
   */
  data: {
    
  },

/*小程序不支持document优先的原则
  process:function(){
    var date = "Feb 8 2018";
    var date_ele = documnet.getElementById('id');
  },
*/

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var post_content1={
       date:"Feb 8 2018",
       title:"正是虾肥蟹壮时",
       img:{
         post_img: "/images/crab.png",
         author_img:"/images/2.png",
       },
       img_condition:true,
       content:"好好品尝秋天的大闸蟹的味道吧！",
       view_num:"112",
       collect_num:"96",
     }
     this.setData(post_content1);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})