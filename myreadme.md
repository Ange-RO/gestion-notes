

## Ajout de Notes : Lorsqu'une note est ajoutée via le composant AddNote.vue, elle est ajoutée directement au store, et tous les composants qui affichent des notes (comme NoteList.vue) se mettent à jour automatiquement.

## Recherche et Filtrage : Le composant SearchAndFilter.vue met à jour searchQuery dans le store, ce qui permet à NoteList.vue de réagir instantanément aux changements de la requête de recherche.



## 1. Gestion Centralisée de l'État
Pinia permet de centraliser la gestion de l'état de l'application dans un store. Cela facilite le partage de données entre différents composants sans avoir à passer des props de manière répétée ou à élever l'état dans la hiérarchie des composants.

2. Réactivité
Vue et Pinia sont conçus pour être réactifs. Lorsque l'état dans le store est mis à jour (par exemple, lorsqu'une note est ajoutée ou supprimée), tous les composants qui dépendent de cet état se mettent à jour automatiquement. Cela simplifie la logique de l'application et réduit les bugs liés à l'état.
3. Simplicité et Clarté
Avec Pinia, vous définissez clairement vos états, actions et getters dans le store. Cela rend le code plus clair et plus facile à maintenir, car il est évident où se trouvent les données et comment elles sont manipulées.
4. Facilité d'Intégration
Pinia s'intègre bien avec Vue 3 et le système de composition API, permettant une utilisation fluide des hooks et des fonctionnalités avancées. Cela facilite également la mise en œuvre de fonctionnalités complexes.
5. Support pour les Actions Asynchrones
Pinia permet de gérer facilement les actions asynchrones, comme les appels API pour charger des données, ce qui est utile si vous souhaitez étendre votre application à l'avenir.
6. Scalabilité
En utilisant Pinia, votre application est mieux préparée à évoluer. Vous pouvez facilement ajouter de nouveaux stores pour gérer d'autres parties de l'état de l'application sans perturber le reste du code.