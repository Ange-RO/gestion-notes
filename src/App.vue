<template>
  <div id="app">
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-white text-2xl">Gestion de Notes</h1>
      </div>
    </nav>
    <SearchAndFilter />
    <AddNote />
    <EditNote />
    <NoteList />
  </div>
</template>

<script>
import AddNote from './components/AddNote.vue';
import NoteList from './components/NoteList.vue';
import SearchAndFilter from './components/SearchAndFilter.vue';
import EditNote from './components/EditNote.vue';
import { useNoteStore } from './stores/noteStore';

export default {
  components: {
    AddNote,
    NoteList,
    SearchAndFilter,
    EditNote,
  },
  setup() {
    const noteStore = useNoteStore();
    noteStore.loadNotes();
    return { noteStore };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
