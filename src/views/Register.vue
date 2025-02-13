<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold mb-4">Register</h2>
            <input type="text" v-model="username" placeholder="Enter Username" class="w-full p-2 border rounded mb-4" />
            <input type="number" v-model="password" placeholder="Enter 4-Digit Password"
                class="w-full p-2 border rounded mb-4" />
            <button @click="register" class="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">
                Register
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const register = () => {
    if (username.value && password.value.length === 4) {
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
        router.push('/');
    } else {
        alert('Enter valid details');
    }
};
</script>