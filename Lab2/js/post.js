const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('post');
appController.showPostsInformationo(id);
