import SearcModel from '../../1-vanilla/js/models/SearchModel.js'
import KeywordModel from '../../1-vanilla/js/models/KeywordModel.js'
import RecentModel from '../../1-vanilla/js/models/HistoryModel.js'
new Vue({
  el : "#app",
  data:{
    // input DATA
    // searchForm : document.querySelector("form"),
    // close : document.querySelector(".closePosition"),
    // searchInput : document.querySelector(".item__input"),
    tabs:['추천 검색어', '최근 검색어'],
    query : '',
    resultData : [],
    tabRec : [],
    selectedTab : "추천 검색어"
  },
  created(){
    this.openTab(this.selectedTab)
  },
  methods:{
    onSubmit(e){
      this.renderResult()
    },
    resetForm(){
      this.query=""
    },
    renderResult(item){
      this.query = item
      SearcModel.list().then(data => {
        this.resultData=data
      })
      RecentModel.add(item)
    },
    onClickTab(tab){
      this.selectedTab = tab
      this.openTab(this.selectedTab)
    },
    initialData(){
      this.tabRec=[]
    },
    openTab(selectedTab){
      this.initialData()
      if(selectedTab==="추천 검색어"){
        KeywordModel.list().then(data => {this.tabRec = data})
      }
      else if(selectedTab==="최근 검색어"){
        RecentModel.list().then(data => {this.tabRec = data})
      }
    },
    removeTabList(keyword, selectedTab){
      RecentModel.remove(keyword)
      this.openTab(selectedTab)
    }
    // closeAni(){
    //   inputWidth = (this.searchInput.value.length * 13+10);
    //   this.close.style.left=this.inputWidth+"px";
    // }
  }
})