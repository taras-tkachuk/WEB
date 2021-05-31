class View {

    createNewPost = (id, post) => {
        const element = document.createElement('div');
        element.classList.add('col-12', 'col-lg-6' ,'mb-5');
        element.innerHTML=`         
                    <div class="col-10 col-lg-10 offset-1 offset-lg-1">
                        <img class="card-img-top" src="${post.img}" alt="post image" />
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text mb-1">
                                ${post.description}
                            </p>
                            <a href="./post-comment.html?post=${id}" class="card-link text-light">More</a>
                        </div>
                    </div>`
        return element;
    };


    postInformation = (post) => {
        const element = document.createElement('div');
        element.classList.add('row');
        element.innerHTML = `
                <img src="${post.img}" class="col-12 col-lg-5 mt-3" alt="post image" />
                <div class="col-12 col-lg-7">
                    <h1 class="display-1">${post.title}</h1>
                    <p>
                        ${post.description}
                    </p>
                </div>
                `;
        return element;
    };

    commentsInfornation = (comment) => {
        const element = document.createElement('div');
        element.classList.add('row', 'bg-light', 'text-dark', 'mb-3');
        element.innerHTML = `
                    <div class="col-md-1 col-3">
                        <img src="${comment.usernameImg}" alt="avatar" class="mt-3" width="80" />
                    </div>
                    <div class="col-md-11 col-9 text-start">
                        <div class="row">
                            <div class="col">
                                <h4>${comment.username}</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p class="col-12 text-wrap">
                                    ${comment.text}
                                </p>
                            </div>
                        </div>
                    </div>`;
        return element;
    };


    createLogoutButton = () => {
        const element = document.createElement('a');
        element.setAttribute('href', '#');
        element.classList.add('nav-link');

        element.innerHTML = 'Logout';
        return element;
    };
}
