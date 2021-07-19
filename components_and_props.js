const app = Vue.createApp({
    data() {
        return {
            comments: [
                {
                    username: "alice",
                    content: "first comment!"
                },
                {
                    username: "bob",
                    content: "hello world!"
                },
                {
                    username: "terminator",
                    content: "I'll be back!"
                },
                {
                    username: "superman",
                    content: "kryptonite is bad!"
                },
            ]
        }
    }
});

app.component('comment', {
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    template: `
        <div>
            <div class="card-body border-bottom border-3">
                <p>{{ comment.username }}</p>
                <p>{{ comment.content }}</p>
            </div>
        </div>
    `
})

app.mount('#app');