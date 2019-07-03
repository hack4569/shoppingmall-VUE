import KeywordModel from '../mvc/model/KeywordModel.js'
import RecentModel from '../mvc/model/HistoryModel.js'

export default {
    template : '#tabKeyword',
    data(){
        return {
            tabs:['추천 검색어', '최근 검색어'],
            tabRec : [],
            selectedTab : "추천 검색어"
        }
    },
    created(){
        this.openTab(this.selectedTab)
    },
    methods : {
        onClickRec(query){
            this.$emit('@click', query)
        },
        onClickTab(tab){
            this.selectedTab = tab
            this.openTab(this.selectedTab)
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
        removeTabList(thisKeyWord, selectedTab){
            RecentModel.remove(thisKeyWord)
            this.openTab(selectedTab)
        },
        initialData(){
            this.tabRec=[]
        }
    }    
}