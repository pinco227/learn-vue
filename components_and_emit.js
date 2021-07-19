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
                }
            ]
        }
    },
    methods: {
        addNewComment(new_comment) {
            this.comments.push(new_comment);
        }
    }
});

// Comment list component
app.component('comment-list', {
    data() {
        return {
            new_comment: null,
            comment_author: null,
            error: null
        }
    },
    methods: {
        submitComment() {
            if (this.new_comment && this.comment_author) {
                this.$emit('submit-comment', {
                    username: this.comment_author,
                    content: this.new_comment
                });

                this.new_comment = null;
                this.comment_author = null;

                if (this.error) {
                    this.error = null;
                }
            } else {
                this.error = "Both fields must be completed!";
            }
        }
    },
    props: {
        comments: {
            type: Array,
            required: true
        }
    },
    template: `
        <div class="mt-2">
            <div class="container-sm">
                <single-comment v-for="(comment, index) in comments" :comment="comment" :key="index">
                </single-comment>
                
                <hr>

                <div v-if="error" class="alert alert-danger">{{ error }}</div>

                <form @submit.prevent="submitComment">
                    <div class="mb-3">
                        <label for="commentAuthor" class="form-label">Your Username</label>
                        <input type="text" id="commentAuthor" class="form-control" v-model="comment_author">
                    </div>
                    <div class="mb-3">
                        <label for="commentText" class="form-label">Your comment</label>
                        <textarea class="form-control" id="commentText" rows="3" cols="40" v-model="new_comment"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Publish</button>
                </form>
            </div>
        </div>
    `
});

// Single comment component
app.component('single-comment', {
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    template: `
        <div class="mb-2">
            <div class="card">
                <div class="card-header">
                    <p>Published by: {{ comment.username }}</p>
                </div>
                <div class="card-body">
                    <p>{{ comment.content }}</p>
                </div>
            </div>
        </div>
    `
});

app.mount('#app');