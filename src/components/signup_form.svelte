<script>
    import supabase from "$lib/db.js";
    import {goto} from "$app/navigation";
    let email;
    let pwd;
    let loading = false;

    async function signUpwithEmail(){
        try {
            loading = true;
            const { user, session, error } = await supabase.auth.signUp(
            {
            email: String(email),
            password: String(pwd),
            })
            if (error) throw new Error(error.message);
            alert("Sent email and password to database!")
            goto("/")
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


    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (error) throw new Error(error.message)
    }

</script>

<div class="flex flex-col items-center gap-2">
    <p class="text-xl">Sign Up</p>
    <form on:submit|preventDefault = {signUpwithEmail} class="flex flex-col gap-2">
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
        
    
    <!--
            <button on:click= {printUser} class="rounded-md w-full bg-lime-300 text-gray-900 py-1">
                Print current user
            </button>
            <legend for="confirm_pwd">Confirm password:</legend>
            <input type="password" id="confirm_pwd" class="text-gray-900">
        -->


</div>