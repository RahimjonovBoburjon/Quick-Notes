<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
            <div class="relative mb-4">
                <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Enter Password"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                <button @click="togglePasswordVisibility"
                    class="absolute right-3 top-3 text-gray-500 hover:text-gray-700 focus:outline-none">
                    {{ showPassword ? '🙈' : '👁️' }}
                </button>
            </div>
            <div class="flex items-center mb-6">
                <label class="flex items-center cursor-pointer">
                    <div class="relative">
                        <input type="checkbox" v-model="rememberMe" class="sr-only" />
                        <div class="w-10 h-4 bg-gray-300 rounded-full shadow-inner transition-colors duration-200">
                        </div>
                        <div class="dot absolute w-6 h-6 bg-white rounded-full shadow-md -top-1 -left-1 transition-transform duration-200"
                            :class="{ 'translate-x-6 bg-blue-500': rememberMe }"></div>
                    </div>
                    <span class="ml-3 text-sm text-gray-700">Remember Me</span>
                </label>
            </div>
            <button @click="login" :disabled="isLoading"
                class="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                {{ isLoading ? 'Logging in...' : 'Login' }}
            </button>
            <p v-if="errorMessage" class="text-red-500 mt-4 text-center text-sm">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const password = ref('');
const errorMessage = ref('');
const showPassword = ref(false);
const rememberMe = ref(false);
const isLoading = ref(false);
const router = useRouter();

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const login = () => {
    isLoading.value = true;
    errorMessage.value = '';

    setTimeout(() => {
        const savedPassword = localStorage.getItem('password');
        if (savedPassword === String(password.value)) {
            if (rememberMe.value) {
                localStorage.setItem('isAuthenticated', 'true');
            }
            router.push('/');
        } else {
            errorMessage.value = 'Invalid Password';
        }
        isLoading.value = false;
    }, 1000);
};
</script>

<style scoped>
.dot {
    transform: translateX(0);
    transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

input:checked~.dot {
    transform: translateX(1.5rem);
    background-color: #3b82f6;
}
</style>