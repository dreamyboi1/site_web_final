<script>
    import supabase from "$lib/db.js";
    import {user} from "$lib/sessionStore.js";
    import {goto} from "$app/navigation"
    let email;
    let pwd;
    let loading = false;

    function goToProfile(){
        goto("/profile")
    }


    async function handleLogin() {
        try {
            loading = true;
            const { user, error } = await supabase.auth.signIn({email: String(email), password: String(pwd)})
            if (error) throw new Error(error.message);
            alert("You are logged in!");
            goToProfile();
        } catch (error) {
            alert(error.error_description || error.message)
        } finally{
            loading = false;
        }
    }
</script>


<div class="w-80 max-h-96 max-w-md p-4 text-yellow-300 bg-blue-500 rounded-lg shadow-2xl">
    <div class="flex flex-col gap-6">
        <p class="text-2xl font-semibold">Log In</p>
        <form on:submit|preventDefault = {handleLogin} class="flex flex-col gap-6">
            <div class="flex flex-col gap-2">
                <legend for="email">E-mail:</legend>
                <input type="text" name="email" bind:value={email} placeholder="Enter your E-mail" class="rounded-md bg-transparent text-yellow-300 w-full p-1 shadow-lg">
            </div>
            <div class="flex flex-col gap-2">
                <legend for="pwd">Password:</legend>
                <input type="password" name="pwd" bind:value={pwd} placeholder="Enter your Password" class="rounded-md bg-transparent text-yellow-300 w-full p-1 shadow-lg">
            </div>
            <button type="submit" class="rounded-md w-full bg-yellow-300 text-gray-900 py-1 shadow-lg">
                Submit
            </button>
        </form>
    </div>
</div>
