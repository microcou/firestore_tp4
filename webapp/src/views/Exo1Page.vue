<script setup>
import { onMounted, ref } from 'vue';
import { collection, query, getDocs, } from "firebase/firestore";
import { db } from "@/setup.js"
import ObjectList from '@/components/ObjectList.vue';

const characters = ref([])

onMounted(() => {
    // ...
})
</script>

<template>
    <h2>Exo 1 : Personnages</h2>

    <p>Afficher la liste de tous les personnages stockés dans la BD lue lors du montage de la page.</p>

    <ObjectList :list="characters" />
</template>