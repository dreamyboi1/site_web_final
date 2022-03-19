<script>
    import supabase from "$lib/db.js";
    import { user } from "$lib/sessionStore";
    import {goto} from "$app/navigation";

    function handleLogout(){
        console.log("Log out");
        supabase.auth.signOut();
        user.set(null);
        goto("/");
    }
</script>




<nav class="flex bg-blue-500 text-yellow-300 text-lg font-semibold h-16 justify-between px-6 py-4 w-full items-center">    
    <div class="flex gap-4 items-center">
        <a href="/"><img src="../../static/puzzle-piece.png" alt="Puzzle logo" class="h-8 w-8"></a>
        <a href="/" class="hover:text-pink-500">Useless market</a>
    </div>
    <div class="flex gap-4 text-lg">
        <a href="/" class="hover:text-pink-500 py-2 px-4">Home</a>
        <a href="/products" class="hover:text-pink-500 py-2 px-4">Products</a>
        <a href="/contact" class="hover:text-pink-500 py-2 px-4">Contact</a>
        <a href="/team" class="hover:text-pink-500 py-2 px-4">Team</a>
    </div>
    <div class="flex gap-6 items-center">
        {#if $user}
            <button on:click={handleLogout} class="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-semibold text-red-500 rounded-xl group bg-gradient-to-br from-teal-300 to-lime-300 hover:from-teal-300 hover:to-lime-300 hover:text-gray-900">
                <span class="relative px-6 py-2.5 transition-all ease-in duration-75 bg-blue-500 rounded-xl group-hover:bg-opacity-0 ">
                    Log Out
                </span>
            </button>
        {:else}
            <a href="/auth" class="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-semibold text-yellow-300  rounded-xl group bg-gradient-to-br from-yellow-300 to-pink-500 hover:from-yellow-300 hover:to-pink-500 hover:text-gray-900">
                <span class="relative px-6 py-2.5 transition-all ease-in duration-75 bg-blue-500 rounded-xl group-hover:bg-opacity-0 ">
                    Log In
                </span>
            </a>
        {/if}
        <img src="../../static/shopping-cart.png" alt="Shopping cart" class="h-6 w-6">
        
        {#if $user}
            <a href="/profile"><img src="../../static/user.png" alt="User information" class="h-6 w-6"></a>
        {/if}
    </div>
</nav>