<script>
    import Nav from "../components/nav.svelte";
    import LogIn from "../components/login_form.svelte"
    import SignUp from "../components/signup_form.svelte"

    let login = true;

    function swapLogin(){
        login = !login
    }

    
</script>


<Nav/>

{#if login}
    <LogIn/>
    <button on:click={swapLogin}>
        Create an account.
    </button>
{:else}
    <SignUp/>
    <button on:click={swapLogin}>
        Already have an account?
    </button>
{/if}
