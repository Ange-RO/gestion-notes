import { defineStore } from 'pinia';

export const useNoteStore = defineStore('note', {
  state: () => ({
    notes: [],
    searchQuery: '',
    noteToUpdate: null,
  }),
  actions: {
    async loadNotes() {
      try {
        const response = await fetch('/src/assets/notes.json');
        if (!response.ok) throw new Error('Erreur réseau');
        const data = await response.json();
        this.notes = data;
      } catch (error) {
        console.error('Erreur lors du chargement des notes:', error);
      }
    },
    addNote(note) {
      this.notes.push(note);
    },
    updateNote(index, updatedNote) {
      this.notes[index] = updatedNote;
      this.noteToUpdate = null;
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
    filterNotes(category) {
      return this.notes.filter(note => note.category === category);
    },
    searchNotes() {
      return this.notes.filter(note =>
        note.title.includes(this.searchQuery) || note.content.includes(this.searchQuery)
      );
    },
    setNoteToUpdate(note) {
      this.noteToUpdate = note;
    },
  },
});
