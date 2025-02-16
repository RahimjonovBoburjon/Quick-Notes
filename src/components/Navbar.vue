<template>
    <nav class="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600">QuickNotes</h1>
        <div>
            <template v-if="username">
                <div class="relative">
                    <button @click="toggleDropdown"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button">
                        Hi, {{ username }}
                        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    <div v-if="isOpen"
                        class="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div class="font-medium truncate">{{ email }}</div>
                        </div>
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                                <a href="#"
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                        </ul>
                        <div class="py-2">
                            <a @click.prevent="signOut"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                Sign out
                            </a>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <router-link to="/login"
                    class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all">Login</router-link>
                <router-link to="/register"
                    class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all mr-2">Sign
                    Up</router-link>
            </template>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const email = ref('No Email Found');
const isOpen = ref(false);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const signOut = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    router.push('/login');
};

onMounted(() => {
    username.value = localStorage.getItem('username') || '';
    email.value = localStorage.getItem('email') || 'No Email Found';
    if (localStorage.getItem('isLocked') === 'true') {
        router.push('/enter-password');
    }
});
</script>