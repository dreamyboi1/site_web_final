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


<div class="absolute w-full z-10">
    <Nav/>
</div>


<!-- <h1 class="text-center font-semibold tracking-tight text-3xl">
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

</div> -->


<div class="text-gray-900 bg-pink-500 h-screen flex flex-col justify-center">

    <div class="w-80 p-4 self-center text-yellow-300 bg-blue-500 rounded-lg shadow-2xl flex flex-col gap-4">
        <p class="font-semibold text-2xl">Your Profile</p>
        {#await getProfile() then data}
            {#each data as profile}
                <form on:submit|preventDefault = {updateProfile} class="flex flex-col gap-4">
                    <div class="flex flex-col gap-1">
                        <legend for="first_name">First Name:</legend>
                        <input type="text" name="first_name" placeholder={profile.first_name} bind:value={firstName} class="placeholder-yellow-300 rounded-md bg-transparent text-yellow-300 w-full p-1 focus:ring-0 shadow-lg">
                    </div>
                    <div class="flex flex-col gap-1">
                        <legend for="last_name">Last Name:</legend>
                        <input type="text" name="last_name" placeholder={profile.last_name} bind:value={lastName} class="placeholder-yellow-300 rounded-md bg-transparent text-yellow-300 w-full p-1 shadow-lg">
                    </div>
                    <div class="flex flex-col gap-1">
                        <legend for="age">Age:</legend>
                        <input type="text" name="age" placeholder={profile.age} bind:value={age} class="placeholder-yellow-300 rounded-md bg-transparent text-yellow-300 w-full p-1 shadow-lg">
                    </div>
                    <button type="submit" class="rounded-md bg-yellow-300 text-gray-900 py-1 shadow-lg">
                        Update Profile
                    </button>
                </form>
            {/each}
        {/await}

    </div>
</div>