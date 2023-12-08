<script setup>
import { reactive } from 'vue';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '@/setup.js'

const credentials = reactive({
    email: "",
    password: "",
});

function onSignup() {
    createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
            console.log("signed up", userCredential)
        })

}

function onLogin() {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
            console.log("signed in", userCredential)
        });
}

function onLogout() {
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("logged out")
    })
}
</script>

<template>
    <h2>Connexion</h2>

    <form @submit.prevent="onLoginSubmit">
        <fieldset>
            <label for="email">Email:</label>
            <input id="email" v-model="credentials.email" />
        </fieldset>

        <fieldset>
            <label for="password">Password:</label>
            <input id="password" type="password" v-model="credentials.password" />
        </fieldset>

        <fieldset>
            <button @click="onLogin">Se connecter</button>
            <button @click="onSignup">Créer un compte</button>
        </fieldset>
    </form>

    <button @click="onLogout">Se déconnecter</button>
</template>

<style scoped>
fieldset {
    border: none;
}

label {
    display: block;
}
</style>