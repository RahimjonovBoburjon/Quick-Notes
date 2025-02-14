<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold mb-4">Login</h2>
            <input type="number" v-model="password" placeholder="Enter Password"
                class="w-full p-2 border rounded mb-4" />
            <button @click="login" class="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">
                Login
            </button>
            <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const login = () => {
    const savedPassword = localStorage.getItem('password');
    if (savedPassword === String(password.value)) {
        localStorage.setItem('isAuthenticated', 'true');
        router.push('/');
    } else {
        errorMessage.value = 'Invalid Password';
    }
};
</script>