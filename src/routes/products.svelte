<script>
    import Nav from "../components/nav.svelte";
    import ProductWidget from "../components/product_widget.svelte";
    import {isOverlayOff} from "../lib/sessionStore.js";

    let dbProductLen = 15;

import Cart from "./cart.svelte";
</script>

<Nav></Nav>

<body>
    <div class="grid place-items-center m-7">
        <div class="w-1/2">
            <h1 class="text-center font-semibold tracking-tight text-3xl">
                Our selection of products at the forefront of Tech and Innovation!
            </h1>
        </div>
    </div>

    <div class="flex justify-center flex-wrap gap-6">

        {#each Array(dbProductLen) as _, index}

            <ProductWidget price={(Math.random()*150).toFixed(2)} title="Produit chelou n°{index+1}"></ProductWidget>

        {/each}

    </div>

    {#if !$isOverlayOff}
        <div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-900 opacity-95">
            <div class="flex bg-white text-black rounded px-3 py-3 relative max-w-lg flex-wrap">
                <img class="w-1/2 h-full object-cover rounded-lg mr-7"
                    src="../static/placeholder.png"
                    alt="product1" />
                <div class="">
                    <h4 class="text-center py-3 text-xl font-semibold tracking-tight text-black">Sample Title</h4>
                    <p class="">Smol description</p>
                    
                </div>
                <button class="absolute top-2 right-3 text-4xl text-black hover:-translate-y-0.5 transition-transform"
                on:click={() => isOverlayOff.set(true)}>
                    &times;
                </button>
                
            </div>
        </div>
    {/if}

</body>


