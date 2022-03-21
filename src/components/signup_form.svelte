<script>
    import supabase from "$lib/db.js";
    import {goto} from "$app/navigation";
    let email;
    let pwd;
    let loading = false;
    let confirm_pwd;

    async function signUpwithEmail(){
        try {
            loading = true;
            const { user, session, error } = await supabase.auth.signUp(
            {
            email: String(email),
            password: String(pwd),
            },
            )
            if (error){
                success = false;
                throw new Error(error.message);
            } else{
                success = true;
                alert("Sign up successful. Check your email!");
                goto("/");
            }
        } catch (error) {
            success = false;
            alert(error.error_description || error.message)
        } finally{
            loading = false;
        }
    }

    function passwordsEqual(){
        return (pwd === confirm_pwd);
    }

    function handleSubmit(){
        if (passwordsEqual()){
            signUpwithEmail();
        } else{
            alert("Passwords don't match!")
            pwd = "";
            confirm_pwd = "";
        }
    }

</script>

<div class="w-80 p-4 text-yellow-300 bg-blue-500 rounded-lg shadow-2xl">
    <div class="flex flex-col gap-6">
        <p class="text-2xl font-semibold">Sign In</p>
        <form on:submit|preventDefault = {handleSubmit} class="flex flex-col gap-4">
            <div class="flex flex-col gap-2 bg-blue-300 rounded-lg p-2">
                <legend for="email">Email:</legend>
                <input type="email" name="email" placeholder="Enter your E-Mail" bind:value={email} class="rounded-md bg-transparent text-yellow-300 w-full p-1 shadow-lg">
            </div>
            <div class="flex flex-col gap-2 bg-blue-300 rounded-lg p-2">
                <legend for="pwd">Password:</legend>
                <input type="password" name="pwd" placeholder="Enter a Password" bind:value={pwd} class="rounded-md bg-transparent text-yellow-300 w-full p-1 shadow-lg">
            </div>
            <div class="flex flex-col gap-2 bg-blue-300 rounded-lg p-2">
                <legend for="pwd">Confirm Password:</legend>
                <input type="password" name="pwd" placeholder="Confirm your Password" bind:value={confirm_pwd} class="rounded-md bg-transparent text-yellow-300 w-full p-1 shadow-lg">
            </div>
            <button type="submit" class="rounded-md w-full bg-yellow-300 text-gray-900 py-1 shadow-lg">
                Submit
            </button>
        </form>
    </div>
</div>