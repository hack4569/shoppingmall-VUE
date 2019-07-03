export default {
    template : '#resultValue',
    props : ['data'],
    data (){
        return {
            resultValue : this.data
        }
    },
    watch : {
        data(newVal, oldVal){
            this.resultValue = newVal
        }
    }
}