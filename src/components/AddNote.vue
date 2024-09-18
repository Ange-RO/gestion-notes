<template>
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Ajouter une Note</h2>
      <form @submit.prevent="submitNote" class="space-y-4">
        <input v-model="title" placeholder="Titre" required class="border rounded p-2 w-full" />
        <textarea v-model="content" placeholder="Contenu" required class="border rounded p-2 w-full"></textarea>
        <div>
          <!-- <label class="block mb-2">Catégorie</label> -->
          <select v-model="selectedCategory" class="border rounded p-2 w-full" @change="checkCustomCategory">
            <option value="">Sélectionnez une catégorie</option>
            <option v-for="cat in predefinedCategories" :key="cat" :value="cat">{{ cat }}</option>
            <option value="custom">Autre (ajoutez votre catégorie)</option>
          </select>
          <input v-if="isCustomCategory" v-model="category" placeholder="Nouvelle catégorie" class="border rounded p-2 w-full mt-2" />
        </div>
        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useNoteStore } from '../stores/noteStore';
  
  export default {
    data() {
      return {
        title: '',
        content: '',
        category: '',
        predefinedCategories: ['Travail', 'Personnel', 'Loisirs', 'Santé', 'Divertissement', 'Voyages'],
        selectedCategory: '',
      };
    },
    computed: {
      isCustomCategory() {
        return this.selectedCategory === 'custom';
      },
    },
    setup() {
      const noteStore = useNoteStore();
      return { noteStore };
    },
    methods: {
      checkCustomCategory() {
        if (this.isCustomCategory) {
          this.category = '';
        } else {
          this.category = this.selectedCategory;
        }
      },
      submitNote() {
        this.noteStore.addNote({
          title: this.title,
          content: this.content,
          category: this.isCustomCategory ? this.category : this.selectedCategory,
        });
        this.resetForm();
      },
      resetForm() {
        this.title = '';
        this.content = '';
        this.category = '';
        this.selectedCategory = '';
      },
    },
  };
  </script>
  