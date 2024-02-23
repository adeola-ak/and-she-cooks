import HomePage from "./home-page";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

async function getUser() {
	"use server";
	const supabase = createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();
	return user;
}

async function signOut() {
	"use server";
	const supabase = createClient();
	await supabase.auth.signOut();
	return redirect("/login");
}

async function getRecipes() {
	"use server";
	const supabase = createClient();
	const { data: recipes } = await supabase.from("recipes").select("*");
	return recipes;
}

export default async function Page() {
	const user = await getUser();
	const recipes = await getRecipes();
	return <HomePage user={user} signOut={signOut} recipes={recipes} />;
}
