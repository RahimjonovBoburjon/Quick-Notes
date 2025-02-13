<template>
    <div class="min-h-screen p-4 bg-gray-100">
        <h2 class="text-2xl font-bold mb-4">Settings</h2>
        <div class="mb-4">
            <input type="number" v-model="oldPassword" placeholder="Old Password"
                class="w-full p-2 border rounded mb-2" />
            <input type="number" v-model="newPassword" placeholder="New Password"
                class="w-full p-2 border rounded mb-4" />
            <button @click="changePassword" class="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">
                Change Password
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const oldPassword = ref('');
const newPassword = ref('');
const router = useRouter();

const changePassword = () => {
    const savedPassword = localStorage.getItem('password');
    if (savedPassword === oldPassword.value && newPassword.value.length === 4) {
        localStorage.setItem('password', newPassword.value);
        alert('Password Changed');
        router.push('/notes');
    } else {
        alert('Invalid Details');
    }
};
</script>