<template>
    <div class="max-w-3xl mx-auto p-4">
        <h2 class="text-2xl font-bold mb-4">Your Notes</h2>
        <div class="mb-4">
            <input v-model="newTitle" class="border p-2 w-full mb-2" placeholder="Title" />
            <textarea v-model="newContent" class="border p-2 w-full mb-2" placeholder="Content"></textarea>
            <button @click="addNewNote" class="bg-blue-500 text-white px-4 py-2 rounded">Add Note</button>
        </div>
        <div v-for="note in notes" :key="note.id" class="border rounded p-4 mb-4 bg-white shadow">
            <h3 class="text-xl font-semibold">{{ note.title }}</h3>
            <p>{{ note.content }}</p>
            <button @click="editNote(note)" class="text-blue-500">Edit</button>
            <button @click="deleteNote(note.id)" class="text-red-500 ml-2">Delete</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import useNotes from '../composables/useNotes';

const { notes, fetchNotes, addNote, updateNote, deleteNote } = useNotes();

const newTitle = ref('');
const newContent = ref('');
const editingNote = ref(null);

onMounted(() => {
    fetchNotes();
});

const addNewNote = () => {
    if (editingNote.value) {
        updateNote(editingNote.value.id, newTitle.value, newContent.value);
        editingNote.value = null;
    } else {
        addNote(newTitle.value, newContent.value);
    }
    newTitle.value = '';
    newContent.value = '';
};

const editNote = (note) => {
    editingNote.value = note;
    newTitle.value = note.title;
    newContent.value = note.content;
};
</script>

<style scoped>
button {
    cursor: pointer;
}
</style>