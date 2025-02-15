<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded shadow-lg w-full max-w-sm">
            <h2 class="text-2xl font-bold mb-4 text-center">Enter Password</h2>
            <input v-model="inputPassword" type="password" placeholder="6-Digit Password"
                class="border p-2 w-full rounded mb-4" maxlength="6" />
            <p v-if="errorMessage" class="text-red-500 mb-2">{{ errorMessage }}</p>
            <button @click="checkPassword"
                class="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 transition">
                Unlock
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const inputPassword = ref('');
const errorMessage = ref('');

const checkPassword = () => {
    const savedPassword = localStorage.getItem('password');
    if (inputPassword.value === savedPassword) {
        localStorage.setItem('isLocked', 'false'); // Qayta kirganda parol so'ramaydi
        router.push('/');
    } else {
        errorMessage.value = 'Incorrect password!';
    }
};
</script>