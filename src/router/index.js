/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";
import PetDetails from "@/views/PetDetails";
import NotFound from "@/views/NotFound";
import NewPet from "@/views/NewPet";
import SearchResults from "@/views/SearchResults"

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/register",
		name: "register",
		component: Register,
	},
	{
		path: "/pet/:id",
		name: "pet",
		component: PetDetails,
	},
	{
		path: "/new",
		name: "new",
		component: NewPet,
	},
	{
		path: "/search/:q",
		name: "search",
		component: SearchResults
	},
	{
		path: "/:pathMatch(.*)*",
		name: "notfound",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

