function config() {
    return {
        url: 'https://book-store-adonis.herokuapp.com/api',
        actions: {
            getAll:{
                method: 'GET',
                path: '/books'
            },
            get:{
                method: 'GET',
                path: '/book/:id'
            },
            update:{
                method: 'PUT',
                path: '/book/:id'
            },
            delete:{
                method: 'DELETE',
                path: '/book/:id'
            },
            add:{
                method: 'POST',
                path: '/book'
            },
            search:{
                method: 'GET',
                path: '/book/search'
            }
        }
    }
}
exports=config