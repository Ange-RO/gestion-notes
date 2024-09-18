<template>
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Liste des Notes</h2>
      <ul class="space-y-4">
        <li v-for="(note, index) in filteredNotes" :key="index" class="p-4 border rounded-lg shadow">
          <h3 class="text-xl">{{ note.title }}</h3>
          <p>{{ note.content }}</p>
          <p><strong>Catégorie:</strong> {{ note.category }}</p>
          <button @click="editNote(note)" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Modifier</button>
          <button @click="deleteNote(index)" class="mt-2 bg-red-500 text-white px-4 py-2 rounded">Supprimer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useNoteStore } from '../stores/noteStore';
  import { computed } from 'vue';
  
  export default {
    setup() {
      const noteStore = useNoteStore();
      const filteredNotes = computed(() => noteStore.searchNotes());
  
      const editNote = (note) => {
        noteStore.setNoteToUpdate(note);
      };
  
      return { noteStore, filteredNotes, editNote };
    },
    methods: {
      deleteNote(index) {
        this.noteStore.deleteNote(index);
      },
    },
  };
  </script>
  