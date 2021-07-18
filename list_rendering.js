const app = Vue.createApp({
    data() {
        return {
            users: [
                {
                    id: 342,
                    name: "Superman",
                    profession: "superhero"
                },
                {
                    id: 343,
                    name: "Batman",
                    profession: "rich superhero"
                },
                {
                    id: 344,
                    name: "Robin",
                    profession: "superhero assistant"
                },
                {
                    id: 345,
                    name: "Arrow",
                    profession: "vigilante"
                },
                {
                    id: 346,
                    name: "BumbleBee",
                    profession: "transformer"
                }
            ]
        }
    }
})

const mountedApp = app.mount('#app')