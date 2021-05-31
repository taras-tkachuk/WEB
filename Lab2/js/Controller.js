class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }

    checkAuth = () => {
        if (!this.model.currentUser) {
            [...document.querySelectorAll('.not-auf')].map(link => (link.style.display = 'none'));
            const commentForm = document.getElementById("comment-form");
            if (commentForm)
            {
                commentForm.style.display = 'none';
            }
        } else {
            const logoutBtn = this.view.createLogoutButton();
            logoutBtn.onclick = () => {
                this.model.logoutCurrentUser();
                location.replace('/index.html');
            };
            document.querySelector('.check-login').innerHTML = '';
            document.querySelector('.check-login').appendChild(logoutBtn);
            document.querySelector('.check-register').innerHTML = '';
            
           
        }
    };

    showPosts = () => {
        const posts = this.model.getPosts();
        posts.reverse().forEach((post, id) => {
            const postElem = this.view.createNewPost(id, post);
            document.querySelector('.posts-container').appendChild(postElem);
        });
    };

    showPostsInformationo = id => {
        const post = this.model.getPost(id);
        const postElement = this.view.postInformation(post);
        document.querySelector('.post-container').appendChild(postElement);

            post.comments.forEach(comment => {
                const commentElem = this.view.commentsInfornation(
                    comment
                );
                document.querySelector('.comments-container').appendChild(commentElem);
            });
        

        document.querySelector('.comment-form').onsubmit = event => {
            event.preventDefault();
            const text = document.querySelector('.text').value;
            const comment = {
                username: 'Taras',
                usernameImg: '../img/owner.jpg',
                text
            };
            this.model.newCommentAdd(id, comment);
            location.reload();
        };
    };

    createNewPostForm = () => {
        document.querySelector('.create-post').onsubmit = () => {
            const title = document.querySelector('.title-input').value;
            const img = document.querySelector('.image-input').value;
            const description = document.querySelector('.desc-input').value;
            const post = { title, img, description, comments: [] };
            this.model.newPostAdd(post);
        };
    };

    loginForm = () => {
        document.querySelector('.login-form').onsubmit = () => {
            const email = document.querySelector('.login-input').value;
            const password = document.querySelector('.password-input').value;
            const user = { email, password };
            this.model.setCurrentUser(user);
            !this.model.currentUser ? alert('Incorrect login or password') : null;
        };
    };

    registrationForm = () => {
        document.querySelector('.reg-form').onsubmit = () => {
            const email = document.querySelector('.email-reg').value;
            const password = document.querySelector('.password-reg').value;
            const sex = document.querySelector(".sex-reg").value;
            const birthday = document.querySelector('.birth-reg').value;
            const newUser = { email, password, sex, birthday };
            this.model.newUserAdd(newUser);     
        };
    };
}

const appController = new Controller();
appController.checkAuth();
