<script>
    import supabase from "$lib/db.js";
    let email;
    let pwd;
    let loading = false;


    async function handleLogin() {
        try {
            loading = true;
            const { user, error } = await supabase.auth.signIn({email, pwd})
            if (error) throw new Error(error.message);
            alert("Sent email and password to database!")
            console.log(user)
        } catch (error) {
            alert(error.error_description || error.message)
        } finally{
            loading = false;
        }
    }
    async function printUser(){
        const user = supabase.auth.user();
        console.log(user);
    }
</script>

<body>
<div class="flex flex-col items-center gap-2">
    <p class="text-xl">Log In</p>
    <form on:submit|preventDefault = {handleLogin} class="flex flex-col gap-2">
        <div>
            <legend for="email">Email:</legend>
            <input type="text" name="email" bind:value={email} class="rounded-md text-gray-900 w-full">
        </div>
        <div>
            <legend for="pwd">Password:</legend>
            <input type="password" name="pwd" bind:value={pwd} class="rounded-md text-gray-900 w-full">
        </div>
        <button type="submit" class="rounded-md w-full bg-lime-300 text-gray-900 py-1">
            Submit
        </button>
    </form>
        
    
    <button on:click= {printUser} class="rounded-md w-full bg-lime-300 text-gray-900 py-1">
        Print current user
    </button>
        <!--
            <legend for="confirm_pwd">Confirm password:</legend>
            <input type="password" id="confirm_pwd" class="text-gray-900">
        -->


</div>
</body>