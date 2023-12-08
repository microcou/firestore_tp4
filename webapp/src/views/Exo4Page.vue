<script setup>
import { onMounted, onUnmounted, onUpdated, reactive, ref, watch } from 'vue';
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "@/setup.js"
import ObjectList from '@/components/ObjectList.vue';


const annonce = reactive({
    title: null,
    category: null,
    description: null,
    price: null
});

function onSubmit() {
    console.log("TODO: créer une annonce", annonce)
}

</script>

<template>
    <h2>Exo 4 : Publication d'une annonces</h2>

    <p>Créer une annonce à partir de ce formulaire.</p>

    <form @submit.prevent="onSubmit">
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