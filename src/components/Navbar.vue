<template>
    <nav class="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600">QuickNotes</h1>
        <div>
            <template v-if="username">
                <button @click="blockSite"
                    class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all ml-4">Block</button>
                <span class="text-gray-700 font-semibold">Hi, {{ username }}</span>
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

onMounted(() => {
    username.value = localStorage.getItem('username') || '';
    if (localStorage.getItem('isLocked') === 'true') {
        router.push('/enter-password');
    }
});

const blockSite = () => {
    localStorage.setItem('isLocked', 'true');
    router.push('/enter-password');
};
</script>
