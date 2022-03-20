<script>
    import supabase from "$lib/db.js";
    import { user } from "$lib/sessionStore";
    import {goto} from "$app/navigation";

    let menuOn = false;

    async function deleteCart(){
        const { data, error } = await supabase
            .from('cart')
            .delete()
            .match({ user_id: $user.id })
    }
    

    function handleLogout(){

        deleteCart()

        console.log("Log out");
        supabase.auth.signOut();
        user.set(null);
        goto("/");
    }

    function toggleMenu(){
        menuOn = !menuOn;
    }
</script>


<div id="mobile_menu" class="absolute sm:hidden w-full text-yellow-300">
    <button on:click={toggleMenu} class="{(menuOn)? "hidden" : "absolute"} top-4 left-4">
        <img class="h-8 aspect-square text-red-400" src="../../static/more.png" alt="Menu icon">
    </button>
    <div class="{(menuOn)? "" : "hidden"} bg-blue-500 p-4 flex justify-between">
        <div>
            <button on:click={toggleMenu} class="">
                <img class="h-7 aspect-square text-red-400" src="../../static/close.png" alt="Menu icon">
            </button>
            <ul class="text-4xl">
                <li><a href="/" class="hover:text-pink-500">Home</a></li>
                <li><a href="/products" class="hover:text-pink-500">Products</a></li>
                <li><a href="/contact" class="hover:text-pink-500">Contact</a></li>
                <li><a href="/team" class="hover:text-pink-500">Team</a></li>    
            </ul>
        </div>
        <div class="flex flex-col-reverse">
            <ul class="text-4xl">
                
                {#if $user}
                    <button class="hover:text-pink-500" on:click={handleLogout}>Log Out</button>
                    <li><a class="hover:text-pink-500" href="/profile">Your Profile</a></li>
                {:else}
                    <li><a href="/auth" class="hover:text-pink-500">Log In</a></li>
                {/if}
                <li><a href="/contact" class="hover:text-pink-500">Contact</a></li>
            </ul>
        </div>
    </div>
</div>

<nav class="hidden sm:flex bg-blue-500 text-yellow-300 text-lg font-semibold h-16 justify-between px-2 lg:px-4 py-4 w-full items-center">    
  
    <a href="/" class="hover:text-pink-500 uppercase pl-0">Useless market</a>

    <ul class="flex text-lg">
        <li><a href="/" class="hover:text-pink-500 py-2 pl-2 pr-4">Home</a></li>
        <li><a href="/products" class="hover:text-pink-500 py-2 px-4">Products</a></li>
        <li><a href="/contact" class="hover:text-pink-500 py-2 px-4">Contact</a></li>
        <li><a href="/team" class="hover:text-pink-500 py-2 px-4">Team</a></li>
    </ul>
    <div class="flex gap-3 items-center">
        {#if $user}
            <button on:click={handleLogout} class="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-semibold text-yellow-300  rounded-xl group bg-gradient-to-br from-yellow-300 to-pink-500 hover:from-yellow-300 hover:to-pink-500 hover:text-gray-900">
                <span class="relative px-4 py-2.5 transition-all ease-in duration-75 bg-blue-500 rounded-xl group-hover:bg-opacity-0 ">
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