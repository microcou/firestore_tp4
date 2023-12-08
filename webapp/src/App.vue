<script setup>
import { RouterLink, RouterView } from 'vue-router';
import AuthStatus from '@/components/AuthStatus.vue';
</script>

<template>
  <h1>Petites annonces</h1>

  <p style="display: flex; gap: 1rem">
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/exo1">exo 1</RouterLink> |
    <RouterLink to="/exo2">exo 2</RouterLink> |
    <RouterLink to="/exo3">exo 3 et 5</RouterLink> |
    <RouterLink to="/exo4">exo 4</RouterLink> |
    <RouterLink to="/exo6">exo 6 et 7</RouterLink> |
    <RouterLink to="/auth">Connexion</RouterLink>
  </p>

  <AuthStatus />

  <hr />

  <RouterView> </RouterView>
</template>


