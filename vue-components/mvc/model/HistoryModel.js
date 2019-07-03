export default {
  data: [
    { keyword: '프라푸치노', date: '12.03' },
    { keyword: '아메리카노', date: '12.02'},
    { keyword: '맥심', date: '12.01' },
  ],

  list() {
    return Promise.resolve(this.data)
  },
  
  add(keyword = '') {
    keyword = keyword.trim()
    if (!keyword) return 
    if (this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword)
    }

    const date = '12.31'
    this.data = [{keyword, date}, ...this.data]
  },
  
  remove(keyword) {
    if(this.data.length==1){
      this.data.length=0
      return false
    }
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}