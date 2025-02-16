import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Notes from '../views/Notes.vue';
import NotFound from '../views/404.vue';

const routes = [
    {
        path: '/',
        name: 'Notes',
        component: Notes,
        beforeEnter: (to, from, next) => {
            const username = localStorage.getItem('username');
            const password = localStorage.getItem('password');
            const isAuthenticated = localStorage.getItem('isAuthenticated');

            if (!username || !password) {
                next('/register');
            }
            else if (username && password && !isAuthenticated) {
                next('/login');
            }
            else {
                next();
            }
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        beforeEnter: (to, from, next) => {
            const username = localStorage.getItem('username');
            const password = localStorage.getItem('password');
            if (username && password) {
                next('/login');
            } else {
                next();
            }
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter: (to, from, next) => {
            const username = localStorage.getItem('username');
            const password = localStorage.getItem('password');
            const isAuthenticated = localStorage.getItem('isAuthenticated');

            if (isAuthenticated) {
                next('/');
            } else if (username && password) {
                next();
            } else {
                next('/register');
            }
        }
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;