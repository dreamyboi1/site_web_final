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


<div class="text-black bg-pink-500 absolute inset-0 h-screen flex flex-col justify-center">
        {#if login}
            <div class="self-center">
                <LogIn/>
            </div>
            <button class="relative -left-24 top-2" on:click={swapLogin}>
                Create an account.
            </button>
        {:else}
            <div class="self-center">
                <SignUp/>
            </div>
            <button class="relative -left-20 top-2"  on:click={swapLogin}>
                Already have an account?
            </button>
        {/if}
</div>
