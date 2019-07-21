Page({
  data: {
    name:'Coderwhy',
    age: 18,
    student:[
      { id: 100, name:'kobe',age:30},
      { id: 101, name: 'wayi', age: 32 },
    ],
    counter:0

  },
  handBtnClick(){
    // 1.错误做法。界面不会刷新
  //  this.data.counter += 1
  //  console.log(this.data.counter)

  this.setData ({
    counter: this.data.counter +=1
  })
  },
  handSub() {
    this.setData({
      counter: this.data.counter -= 1
    })
  },
})