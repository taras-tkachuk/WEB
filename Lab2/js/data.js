const data = [
    {
        title: 'Post 1',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: '../img/food.jpg',
        comments: [
            {
                username: 'Username',
                usernameImg: '../img/user.png',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elitsit amet.'
            }
        ]
    },
    {
        title: 'Post 2',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: '../img/food.jpg',
        comments: [
            {
                username: 'Username',
                usernameImg: '../img/user.png',
                text:
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet, consectetur adipisicing elitsit.'
            }
        ]
    },
    {
        title: 'Post 3',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        img: '../img/food.jpg',
        comments: [
            {
                username: 'Username',
                usernameImg: '../img/user.png',
                text: 'Lorem ipsum dolor sit amet.'
            }
        ]
    }
];

if (!localStorage.getItem('authorization')) {
    localStorage.setItem(
        'authorization',
        JSON.stringify({
            currentUser: null,
            allUsers: [
                {
                    username: 'taras',
                    email: 'taras@gmail.com',
                    password: '1111',
                    sex: 'man',
                    birthday: '18.03.2001'
                }
            ]
        })
    );
}

if (!localStorage.getItem('posts')) {
    localStorage.setItem('posts', JSON.stringify(data));
}
