<template>
    <div class="min-h-screen p-4 bg-gray-100">
        <h2 class="text-2xl font-bold mb-4">Your Notes</h2>
        <button @click="newNote" class="bg-blue-500 text-white py-2 px-4 rounded mb-4">
            New Note
        </button>
        <div v-for="(note, index) in notes" :key="index" class="bg-white p-4 rounded shadow mb-4">
            <p>{{ note }}</p>
            <button @click="editNote(index)" class="text-blue-500 mr-2">Edit</button>
            <button @click="deleteNote(index)" class="text-red-500">Delete</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const notes = ref(JSON.parse(localStorage.getItem('notes')) || []);
const newNote = () => {
    const note = prompt('Enter your note:');
    if (note) {
        notes.value.push(note);
        localStorage.setItem('notes', JSON.stringify(notes.value));
    }
};

const editNote = (index) => {
    const edited = prompt('Edit your note:', notes.value[index]);
    if (edited !== null) {
        notes.value[index] = edited;
        localStorage.setItem('notes', JSON.stringify(notes.value));
    }
};

const deleteNote = (index) => {
    notes.value.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes.value));
};
</script>