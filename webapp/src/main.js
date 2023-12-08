import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import Exo1Page from "@/views/Exo1Page.vue";
import Exo2Page from "@/views/Exo2Page.vue";
import Exo3Page from "@/views/Exo3Page.vue";
import Exo4Page from "@/views/Exo4Page.vue";
import Exo6Page from "@/views/Exo6Page.vue";
import AuthPage from "@/views/AuthPage.vue";
import App from "@/App.vue";
import {} from "@/setup.js";

const routes = [
	{ path: "/", component: HomePage },
	{ path: "/exo1", component: Exo1Page },
	{ path: "/exo2", component: Exo2Page },
	{ path: "/exo3", component: Exo3Page },
	{ path: "/exo4", component: Exo4Page },
	{ path: "/exo6", component: Exo6Page },
	{ path: "/auth", component: AuthPage },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount("#app");
