const tag = 'SearchModel'
const data = [
    {
      id: 1,
      name: '[스타벅스] 커피',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    },
    {
      id: 2,
      name: '[이디야] 커피',
      image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
    }
  ]
  
  export default {
    list(query) {
        console.log(tag, 'list')
      return new Promise(res => {
        setTimeout(()=> {
          res(data)
        }, 200);
      })
    }
  }