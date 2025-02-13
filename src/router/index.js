import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Notes from '../views/Notes.vue';
import Settings from '../views/Settings.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/notes', component: Notes },
    { path: '/settings', component: Settings },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;