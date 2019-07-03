export default {
    template : '#formSearch',
    props : ['value'],
    watch : {
        value(newVal, oldVal){
            this.inputValue = newVal
        }
    },
    data(){
        return {
            inputValue : this.value
        }
    },
    methods : {
        onSubmit(){
            this.$emit('@submit', this.inputValue.trim())
        },
        resetForm(){
            this.inputValue=""
            this.$emit('@reset')
        }
    }    
}