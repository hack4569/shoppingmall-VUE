export default {
  data: [
    {keyword: '스타벅스'}, 
    {keyword: '이디야'}, 
    {keyword: '아메리카노'}, 
    {keyword: '커피'}
  ],

  list() {
    return new Promise(res => {
      setTimeout(() => {
        res(this.data)
      }, 200)
    })
  }
}
