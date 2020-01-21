import PostsPage from './Components/pages/Posts';
import CreatePostForm from './Components/molecules/CreatePostForm';

export const routes = [
  {
    text: 'App',
    path: '/',
    component: () => 'hello there',
    displayOnMenu: false
  },
  {
    text: 'Posts',
    path: '/posts',
    component: PostsPage,
    displayOnMenu: true
  },
  {
    text: 'Create a Post',
    path: '/posts/create',
    component: CreatePostForm,
    displayOnMenu: false
  }
];
