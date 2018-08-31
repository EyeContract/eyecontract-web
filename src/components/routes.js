import Main from './main';
import Template from './template';
import Chat from './chat';
import MyInfo from './my-info';

export default [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/template',
    component: Template,
  },
  {
    path: '/chat',
    component: Chat,
  },
  {
    path: '/info',
    component: MyInfo,
  },
];