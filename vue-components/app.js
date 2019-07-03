import SearcModel from './mvc/model/SearchModel.js'
import RecentModel from './mvc/model/HistoryModel.js'

import FormComponent from './components/FormComponent.js'
import TabComponent from './components/TabComponent.js'
import ResultComponent from './components/resultComponent.js'
new Vue({
  el : "#app",
  data:{
    query : '',
    resultData : []
  },
  components : {
    'formsearch' : FormComponent,
    'tabkeyword' : TabComponent,
    'resultvalue' : ResultComponent
  },
  methods:{
    onSubmit(query){
      this.renderResult(query)
    },
    renderResult(item){
      SearcModel.list().then(data => {
        this.resultData=data
      })
      RecentModel.add(item)
    },
    onClickRec(query){
      this.query = query
      this.renderResult(this.query)
    },
    removeResult(){
      this.resultData=[]
    }
  }
})