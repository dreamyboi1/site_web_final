<script>
    import Nav from "../components/nav.svelte";
    import LogIn from "../components/login_form.svelte"
    import SignUp from "../components/signup_form.svelte"

    let login = true;

    function swapLogin(){
        login = !login
    }

    
</script>

<div class="absolute w-full z-10">
    <Nav/>
</div>


<div class="text-black bg-pink-500 inset-0 h-screen flex flex-col justify-center">
        {#if login}
            <div class="self-center">
                <LogIn/>
            </div>
            <button class="relative -left-24 top-2 underline" on:click={swapLogin}>
                Create an account.
            </button>
        {:else}
            <div class="self-center">
                <SignUp/>
            </div>
            <button class="relative -left-20 top-2 underline"  on:click={swapLogin}>
                Already have an account?
            </button>
        {/if}
</div>
