<template>
    <div v-if="noteToUpdate" class="p-4">
      <h2 class="text-2xl font-bold mb-4">Modifier la Note</h2>
      <form @submit.prevent="submitUpdate" class="space-y-4">
        <input v-model="note.title" class="border rounded p-2 w-full" />
        <textarea v-model="note.content" class="border rounded p-2 w-full"></textarea>
        <input v-model="note.category" class="border rounded p-2 w-full" />
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Mettre à jour</button>
        <button @click="cancelUpdate" class="bg-gray-500 text-white px-4 py-2 rounded">Annuler</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useNoteStore } from '../stores/noteStore';
  
  export default {
    setup() {
      const noteStore = useNoteStore();
      return { noteStore };
    },
    computed: {
      noteToUpdate() {
        return this.noteStore.noteToUpdate;
      },
      note: {
        get() {
          return this.noteToUpdate;
        },
        set(value) {
          this.noteStore.noteToUpdate = value;
        },
      },
    },
    methods: {
      submitUpdate() {
        const index = this.noteStore.notes.findIndex(note => note === this.noteToUpdate);
        this.noteStore.updateNote(index, { ...this.note });
        this.cancelUpdate();
      },
      cancelUpdate() {
        this.noteStore.noteToUpdate = null;
      },
    },
  };
  </script>
  