import { ref } from 'vue';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from 'firebase/firestore';

const useNotes = () => {
    const notes = ref([]);

    const fetchNotes = async () => {
        notes.value = [];
        const q = query(collection(db, 'notes'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            notes.value.push({ id: doc.id, ...doc.data() });
        });
    };

    const addNote = async (title, content) => {
        await addDoc(collection(db, 'notes'), {
            title,
            content,
            createdAt: serverTimestamp()
        });
        fetchNotes();
    };

    const updateNote = async (id, title, content) => {
        const noteRef = doc(db, 'notes', id);
        await updateDoc(noteRef, { title, content });
        fetchNotes();
    };

    const deleteNote = async (id) => {
        await deleteDoc(doc(db, 'notes', id));
        fetchNotes();
    };

    return {
        notes,
        fetchNotes,
        addNote,
        updateNote,
        deleteNote
    };
};

export default useNotes;
