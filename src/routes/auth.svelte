<script>
    import Nav from "../components/nav.svelte";
    import LogIn from "../components/login_form.svelte"
    import SignUp from "../components/signup_form.svelte"

    let login = true;

    function swapLogin(){
        login = !login
    }

    
</script>

<!-- <div class="sticky z-10 top-0 left-0">
    <Nav/>
</div> -->

<!-- {#if login}
    <LogIn/>
    <button on:click={swapLogin}>
        Create an account.
    </button>
{:else}
    <SignUp/>
    <button on:click={swapLogin}>
        Already have an account?
    </button>
{/if} -->


<!-- <div class="grid place-items-center m-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 p-4 text-yellow-300 bg-blue-500 rounded-lg shadow-lg">
        <LogIn/>
    </div>
</div> -->

<div class="relative">
    <div class="text-black absolute inset-0 h-screen flex justify-center items-center">
        <div class="grid place-items-center">
                <LogIn/>
            
        </div>
    </div>
</div>