<script setup>
import { onMounted, onUnmounted, onUpdated, reactive, ref, watch } from 'vue';
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "@/setup.js"
import ObjectList from '@/components/ObjectList.vue';


const annonce = reactive({
    id: null,
    title: null,
    category: null,
    description: null,
    price: null
});

function onSubmit() {
    console.log("TODO: modifer une annonce", annonce)
}

function onClickDelete() {
    console.log("TODO: supprimer une annonce", annonce);
}

</script>

<template>
    <h2>Exo 6 : Modification d'une annonces</h2>

    <p>Modifier une annonce à partir de ce formulaire.</p>
    <p>Exo 7 : Appliquer le contrôle d'accès, plus précisément autoriser seulement l'auteur d'une annonce à modifier ou
        supprimer</p>

    <form @submit.prevent="onSubmit">
        <fieldset>
            <label for="id">ID:</label>
            <input id="id" v-model="annonce.id" />
        </fieldset>

        <fieldset>
            <label for="title">Titre:</label>
            <input id="title" v-model="annonce.title" />
        </fieldset>

        <fieldset>
            <label for="category">Categorie:</label>
            <input id="category" v-model="annonce.category" />
        </fieldset>

        <fieldset>
            <label for="description">Description:</label>
            <textarea id="description" v-model="annonce.description" />
        </fieldset>

        <fieldset>
            <label for="price">Prix:</label>
            <input id="price" v-model="annonce.price" />
        </fieldset>

        <fieldset>
            <button type="submit">Créer</button>
            <button @click="onClickDelete">Supprimer</button>
        </fieldset>
    </form>
</template>

<style scoped>
fieldset {
    border: none;
}

label {
    display: block;
}
</style>