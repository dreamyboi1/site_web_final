<script>
    import supabase from "$lib/db.js";
    import {goto} from "$app/navigation";
    let fullName;
    let shoeSize;
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
            },
            )
            if (error) throw new Error(error.message);
            alert("Sign up successful! Check your email");
            console.log(user)
            goto("/");
        } catch (error) {
            alert(error.error_description || error.message)
        } finally{
            loading = false;
        }
    }

    function userExists(user){
        //Function that checks if a user is in the database.
    }

    function handleSubmit(){
        //Add checkForm function that checks if the form entered is correct.
        signUpwithEmail();
        
    }

</script>

<div class="flex flex-col items-center gap-2">
    <p class="text-xl">Sign Up</p>
    <form on:submit|preventDefault = {handleSubmit} class="flex flex-col gap-2">
        <div>
            <legend for="fullname">Your name:</legend>
            <input type="text" name="fullname" bind:value={fullName} class="rounded-md text-gray-900 w-full">
        </div>
        <div>
            <legend for="shoesize">Your shoe size:</legend>
            <input type="text" name="shoesize" bind:value={shoeSize} class="rounded-md text-gray-900 w-full">
        </div>
        <div>
            <legend for="email">Email:</legend>
            <input type="email" name="email" bind:value={email} class="rounded-md text-gray-900 w-full">
        </div>
        <div>
            <legend for="pwd">Password:</legend>
            <input type="password" name="pwd" bind:value={pwd} class="rounded-md text-gray-900 w-full">
        </div>
        <button type="submit" class="rounded-md w-full bg-lime-300 text-gray-900 py-1">
            Submit
        </button>
    </form>

</div>