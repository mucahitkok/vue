const app = Vue.createApp({
    data() {
        return {
            title: 'İlk',
            isctive: true,
            href: 'https://google.com',
            linktext: 'Google',
            name: '',
        }
    },
    methods: {
        changeTitle() {
            if(this.title === 'İlk') {
                this.title = 'İkinci'
            }
            else {
                this.title = 'İlk'
            }
            this.isctive = !this.isctive
        },
        alert() {

            if(this.name === '') {
                alert('Lütfen isminizi giriniz')
            }
            else {
                alert('Merhab ' + this.name)
                this.name = ''
            }
        }
    }
}).mount('#app');