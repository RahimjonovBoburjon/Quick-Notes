import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Notes from '../views/Notes.vue';
import Settings from '../views/Settings.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/notes',
        name: 'Notes',
        component: Notes,
        beforeEnter: (to, from, next) => {
            const isAuthenticated = localStorage.getItem('password');
            if (isAuthenticated) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings,
        beforeEnter: (to, from, next) => {
            const isAuthenticated = localStorage.getItem('password');
            if (isAuthenticated) {
                next();
            } else {
                next('/');
            }
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;