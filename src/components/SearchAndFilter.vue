<template>
    <div class="p-4 bg-gray-100 rounded shadow-md mb-4">
      <input
        v-model="searchQuery"
        placeholder="Rechercher des notes..."
        @input="updateSearch"
        class="border rounded p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
     <select
        v-model="selectedCategory"
        @change="filterNotes"
        class="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Toutes les catégories</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
    </div>
  </template>
  
  <script>
  import { useNoteStore } from '../stores/noteStore';
  
  export default {
    data() {
      return {
        selectedCategory: '',
        categories: [],
      };
    },
    setup() {
      const noteStore = useNoteStore();
      return { noteStore };
    },
    computed: {
      searchQuery: {
        get() {
          return this.noteStore.searchQuery;
        },
        set(value) {
          this.noteStore.searchQuery = value;
        },
      },
    },
    methods: {
      updateSearch() {
        this.noteStore.searchNotes();
      },
      filterNotes() {
        this.noteStore.notes = this.selectedCategory
          ? this.noteStore.filterNotes(this.selectedCategory)
          : this.noteStore.notes;
      },
    },
    mounted() {
      this.categories = [...new Set(this.noteStore.notes.map(note => note.category))];
    },
  };
  </script>
  