const app = Vue.createApp({
    data() {
        return {
            comment: null,
            comments: [],
            errors: null
        }
    },
    methods: {
        onSubmit() {
            if (this.comment) {
                let new_comment = this.comment;
                this.comments.push(new_comment);
                this.comment = null;

                if (this.errors) {
                    this.errors = null
                }
            } else {
                this.errors = "The comment field cannot be empty!";
            }
        }
    }
}).mount("#app")