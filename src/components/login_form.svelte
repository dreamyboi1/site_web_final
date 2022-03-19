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
            alert("Sent email and password to database!");
            goToProfile();
        } catch (error) {
            alert(error.error_description || error.message)
        } finally{
            loading = false;
        }
    }
</script>

<body>
    <div class="w-64 h-80 sm:w-80 lg:w-80 p-4 text-yellow-300 bg-blue-500 rounded-lg shadow-lg">
        <div class="w-full h-full">
            <div class="flex flex-col gap-2">
                <p class="text-2xl uppercase">Log In</p>
                <form on:submit|preventDefault = {handleLogin} class="flex flex-col gap-2">
                    <div>
                        <legend for="email">Email:</legend>
                        <input type="text" name="email" bind:value={email} placeholder="E-mail" class="rounded-md text-gray-900 w-full p-2">
                    </div>
                    <div>
                        <legend for="pwd">Password:</legend>
                        <input type="password" name="pwd" bind:value={pwd} placeholder="Password" class="rounded-md text-gray-900 w-full p-2">
                    </div>
                    <button type="submit" class="rounded-md w-full bg-yellow-300 text-gray-900 py-2 relative top-6">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</body>