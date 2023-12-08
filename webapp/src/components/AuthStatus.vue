<script setup>
import { onAuthStateChanged } from 'firebase/auth'
import { ref } from 'vue';
import { auth } from '@/setup.js';

let currentUser = ref(null);

onAuthStateChanged(auth, (user) => {
    currentUser.value = user;
});
</script>

<template>
    <div>Authentication status:
        <span v-if="currentUser">email: {{ currentUser.email }} | uid: {{ currentUser.uid }}</span>
        <span v-else>déconnecté</span>
    </div>
</template>