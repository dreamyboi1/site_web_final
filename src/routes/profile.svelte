<script>
    import Nav from "../components/nav.svelte"
    import supabase from "$lib/db.js";
    import {user} from "$lib/sessionStore.js";
    import { createEventDispatcher } from "svelte";
    import { each } from "svelte/internal";


    let firstName;
    let lastName;
    let age;

    async function getProfile() {
        if (!$user){
            return
        }
        let { data, error } = await supabase
            .from('profiles')
            .select()
            .eq("user_id", $user.id)
        if (error) throw new Error(error.message)

        return data
    }


    async function updateProfile(){
        try{
            const { data, error } = await supabase
            .from('profiles')
            .upsert(
                {user_id: $user.id, email: $user.email, first_name: firstName, last_name: lastName, age: age},{onConflict:"user_id"}
            )
            if (error) throw new Error(error.message)
            alert("Profile updated!")
            location.reload()
            return data

        } catch (TypeError){
            console.log("No id attribute")
        } 
    }



</script>


<Nav/>


<h1 class="text-center font-semibold tracking-tight text-3xl">
    My Profile
</h1>

{#if $user}
    {#await getProfile() then data}
        {#each data as profile}
            <p>Email:</p>
            <p>{profile.email}</p>
            <p>First Name:</p>
            <p>{profile.first_name}</p>
            <p>Last Name:</p>
            <p>{profile.last_name}</p>
            <p>Age:</p>
            <p>{profile.age}</p>
        {/each}
    {/await}
    
{/if}

<div class="flex flex-col items-center gap-2">
    <form on:submit|preventDefault = {updateProfile} class="flex flex-col gap-2">

        <div>
            <p>Email:</p>
            <p>{$user ? $user.email : ""}</p>
        </div>
        <div>
            <legend for="first_name">First Name:</legend>
            <input type="text" name="first_name" bind:value={firstName} class="rounded-md text-gray-900 w-full">
        </div>
        <div>
            <legend for="last_name">Last Name:</legend>
            <input type="text" name="last_name" bind:value={lastName} class="rounded-md text-gray-900 w-full">
        </div>
        <div>
            <legend for="age">Age:</legend>
            <input type="text" name="age" bind:value={age} class="rounded-md text-gray-900 w-full">
        </div>
        <button type="submit" class="rounded-md w-full bg-lime-300 text-gray-900 py-1">
            Update Profile
        </button>
    </form>

</div>