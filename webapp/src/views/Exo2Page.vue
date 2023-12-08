<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "@/setup.js"
import ObjectList from '@/components/ObjectList.vue';

let unsubscribe = null;

const characters = ref([]);

onMounted(() => {
    console.log("mounting & subscribing");
    // ...
})

onUnmounted(() => {
    console.log("unmounting");
    if (unsubscribe) {
        console.log("unsubscribing");
        unsubscribe();
        unsubscribe = null;
    }
})
</script>

<template>
    <h2>Exo 2 : Personnages</h2>

    <p>Observer en continu la liste des personnages stockés dans la BD, modifier les données en parallèle à l'aide de la
        console.</p>

    <ObjectList :list="characters" />
</template>