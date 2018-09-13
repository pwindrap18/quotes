var app = new Vue({
    el: '#app',
    data: {
        email : '',
        password : '',
    },
    methods : {
        login : function() {
            if(this.email!=''&&this.password!=''){
                console.log('dasdasd')
            }
        }
    }
})