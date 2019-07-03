const tag = 'mainController'
import FormView from '../view/FormView.js'
import ResultView from '../view/resultView.js';
import SearchModel from '../model/SearchModel.js'
import TabView from '../view/TabView.js'
import RecommendView from '../view/RecommendView.js'
import RecentView from '../view/RecentView.js'
import KeywordModel from '../model/KeywordModel.js'
import HistoryModel from '../model/HistoryModel.js'
export default{
    init(){
        console.log(tag, 'init')
        FormView.setup(document.querySelector("form"))
            .on("@submit", e => this.submitEvent(e.detail.input))
            .on("@reset", e => this.resetEvent())

        ResultView.setup(document.querySelector('.productList-section'))
        TabView.setup(document.querySelector('.searchList-section'))
        RecommendView.setup(document.querySelector('.tabList-com'))
        RecentView.setup(document.querySelector('.tabList-recent'))
        this.renderCom()
        this.renderRecent()
        RecommendView.on("@click", e => this.search(e.detail.recommend))
        RecentView.on("@clickRecent", e => this.search(e.detail.recent))
            .on('@clickClose', e => this.changeData(e.detail.recentClose))
    },
    renderCom(){
        KeywordModel.list().then(data => {this.onRecResult(data)})
    },
    renderRecent(){
        HistoryModel.list().then(data => {this.onRecentResult(data)})
    },
    onRecResult(data){
        RecommendView.render(data)
    },
    changeData(data){
        HistoryModel.remove(data)
        this.renderRecent()
    },
    onRecentResult(data){
        RecentView.render(data)
    },
    submitEvent(input){
        this.search(input)
    },
    search(query){
        FormView.renderForm(query)
            .searchEvent()
        SearchModel.list(query).then(data => {
            this.onSearchResult(data)
        })
        HistoryModel.add(query)
        this.renderRecent()
    },
    onSearchResult(data) {
        console.log(tag, 'onSearchResult');
        ResultView.render(data)
    },
    resetEvent(){
        ResultView.hide()
    }
}
