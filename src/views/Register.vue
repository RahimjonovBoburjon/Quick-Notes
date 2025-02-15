<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div
            class="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
            <h2 class="text-3xl font-bold mb-6 text-center text-gray-800 drop-shadow-sm">Create Account</h2>
            <transition name="fade">
                <p v-if="errorMessage" class="text-red-500 text-sm text-center mb-4">{{ errorMessage }}</p>
            </transition>

            <div class="mb-6">
                <input type="text" v-model="username" placeholder="Enter Username"
                    class="w-full p-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    autocomplete="off" />
            </div>

            <div class="mb-6">
                <input type="email" v-model="email" placeholder="Enter Email"
                    class="w-full p-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    autocomplete="username" />
            </div>

            <div class="mb-6 relative">
                <input :type="showPassword ? 'text' : 'password'" v-model="password"
                    placeholder="Enter 6-Digit Password"
                    class="w-full p-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-12"
                    @input="password = password.replace(/[^0-9]/g, '')" maxlength="6" autocomplete="new-password" />
                <button @click="togglePasswordVisibility"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none">
                    {{ showPassword ? '🙈' : '👁️' }}
                </button>
            </div>

            <button @click="register" :disabled="isLoading"
                class="w-full bg-blue-500 bg-opacity-90 backdrop-blur-sm text-white py-4 rounded-xl hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] active:scale-100 disabled:opacity-70 disabled:cursor-not-allowed">
                <span v-if="!isLoading">Register</span>
                <span v-else class="flex items-center justify-center">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                        </circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                </span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const isLoading = ref(false);
const showPassword = ref(false);
const router = useRouter();

const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
};

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const showError = (message) => {
    errorMessage.value = message;
    setTimeout(() => {
        errorMessage.value = '';
    }, 3000);
};

const register = async () => {
    errorMessage.value = '';

    if (!username.value.trim()) {
        showError('Username is required!');
        return;
    }
    if (!validateEmail(email.value.trim())) {
        showError('Please enter a valid email!');
        return;
    }
    if (password.value.trim().length !== 6) {
        showError('Password must be 6 digits!');
        return;
    }

    isLoading.value = true;

    await new Promise((resolve) => setTimeout(resolve, 2000));

    localStorage.setItem('username', username.value.trim());

    localStorage.setItem('email', email.value.trim());
    localStorage.setItem('password', password.value.trim());

    isLoading.value = false;
    router.push('/login');
};
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

div.bg-white {
    animation: fadeIn 0.8s ease-out;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>