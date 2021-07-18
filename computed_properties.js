const app = Vue.createApp({
    data() {
        return {
            first_name: "John",
            last_name: "Doe"
        }
    },
    computed: {
        getRandomComputed() {
            return Math.random()
        },
        fullName() {
            return `${this.first_name} ${this.last_name}`
        },
        reverseFullName() {
            first = this.first_name.split("").reverse().join("")
            last = this.last_name.split("").reverse().join("")
            return `${last} ${first}`
        },
    },
    methods: {
        getRandomNumber() {
            return Math.random()
        }
    }
}).mount('#app');