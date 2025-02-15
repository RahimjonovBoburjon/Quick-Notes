<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-center">
            <h2 class="text-2xl font-bold mb-4">Enter PIN</h2>
            <p v-if="errorMessage" class="text-red-500 text-sm mb-2">{{ errorMessage }}</p>
            <input type="password" v-model="enteredPin" maxlength="6" placeholder="Enter 6-digit PIN"
                class="w-full p-3 border rounded mb-4 text-center text-2xl tracking-widest"
                @input="enteredPin = enteredPin.replace(/[^0-9]/g, '')" autofocus />
            <button @click="unlock"
                class="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition-all">Unlock</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const enteredPin = ref('');
const errorMessage = ref('');
const router = useRouter();

const unlock = () => {
    const savedPin = localStorage.getItem('lockPin');
    if (savedPin === enteredPin.value) {
        errorMessage.value = '';
        enteredPin.value = '';
        router.push('/');
    } else {
        errorMessage.value = 'Invalid PIN!';
    }
};
</script>

<style scoped>
input {
    letter-spacing: 5px;
    font-weight: bold;
}
</style>