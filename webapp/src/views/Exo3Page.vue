<script setup>
import { onMounted, onUnmounted, onUpdated, reactive, ref, watch } from 'vue';
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "@/setup.js"
import ObjectList from '@/components/ObjectList.vue';

let unsubscribe = null;

const annonces = ref([]);

const candidateFilters = reactive({
    priceMin: null,
    priceMax: null,
    category: null
})

let filters = reactive({
    priceMin: null,
    priceMax: null,
    category: null
})

function onSubmitFilters() {
    filters.priceMin = candidateFilters.priceMin;
    filters.priceMax = candidateFilters.priceMax;
    filters.category = candidateFilters.category;
}

function reSubscribe() {
    console.log("component updated, re-subscribing", filters);

    if (unsubscribe) {
        console.log("unsubscribing");
        unsubscribe();
        unsubscribe = null;
    }

    let clauses = []

    if (filters.priceMin) {
        clauses.push(where("price", ">=", filters.priceMin))
    }

    if (filters.priceMax) {
        clauses.push(where("price", "<=", filters.priceMax))
    }

    if (filters.category) {
        clauses.push(where("category", "==", filters.category))
    }

    // ...
}

onMounted(reSubscribe);

watch(filters, reSubscribe);

</script>

<template>
    <h2>Exo 3 : Annonces</h2>

    <p>Observer en continu la liste des annonces.</p>
    <p>Exo 5 : Appliquer les filters ci-dessous.</p>

    <form @submit.prevent="onSubmitFilters">
        <fieldset>
            <label for="pricemin">Price min:</label>
            <input id="pricemin" v-model="candidateFilters.priceMin" />
        </fieldset>

        <fieldset>
            <label for="pricemax">Price max:</label>
            <input id="pricemax" v-model="candidateFilters.priceMax" />
        </fieldset>

        <fieldset>
            <label for="category">Category:</label>
            <input id="category" v-model="candidateFilters.category" />
        </fieldset>

        <fieldset>
            <button type="submit">Appliquer</button>
        </fieldset>

    </form>

    <ObjectList :list="annonces" />
</template>

<style scoped>
fieldset {
    display: inline-block;
    border: none;
}
</style>