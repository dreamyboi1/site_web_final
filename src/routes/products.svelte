<script>
    import Nav from "../components/nav.svelte";
    import ProductWidget from "../components/product_widget.svelte";
    import {isOverlayOff} from "../lib/sessionStore.js";

    let dbProductLen = 15;

import Cart from "./cart.svelte";
</script>

<div class="sticky z-10 top-0 left-0">
    <Nav></Nav>
</div>

<body class="bg-gray-900">
    <div class="grid place-items-center py-12 {!$isOverlayOff? "opacity-5" : "opacity-100"}">
        <div class="w-1/2">
            <h1 class="text-center font-semibold tracking-tight text-3xl">
                Our selection of products at the forefront of Tech and Innovation!
            </h1>
        </div>
    </div>

    <div class="flex justify-center flex-wrap gap-6 {!$isOverlayOff? "opacity-5" : "opacity-100"}">

        {#each Array(dbProductLen) as _, index}

            <ProductWidget price={(Math.random()*150).toFixed(2)} title="Produit chelou n°{index+1}"></ProductWidget>

        {/each}

    </div>

    {#if !$isOverlayOff}
        <div class="w-screen h-screen fixed top-16 left-0 flex justify-center items-center">
            <div class="w-3/4 min-w-[70px] flex bg-white text-black rounded px-3 py-3 relative max-w-3xl flex-wrap gap-3">
                <div class="flex flex-col w-5/12">
                    <img class="h-full object-cover rounded-lg mr-7"
                        src="../static/placeholder.png"
                        alt="product1" />
                </div>
                <div class="flex flex-col w-5/12 ">
                    <h4 class="text-center py-2 text-xl font-semibold tracking-tight text-black">Sample Title</h4>
                    <p class="pb-2">Smol description</p>
                    <table class="w-full table-auto shadow-md rounded">
                        <tbody>
                            <tr>
                                <td>Weight</td>
                                <td class="text-red-700">12.5 kg</td>
                            </tr>
                            <tr>
                                <td>Size</td>
                                <td class="text-red-700">12 cm</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td class="text-red-700">57 y/o</td>
                            </tr>
                            <tr>
                                <td>Warranty</td>
                                <td class="text-red-700">666 years</td>
                            </tr>
                            <tr>
                                <td>Autonomy</td>
                                <td class="text-red-700">12 months</td>
                            </tr>

                        </tbody>
                    </table>
                    
                </div>
                <button class="absolute top-0 right-2 text-4xl text-black hover:-translate-y-0.5 transition-transform"
                on:click={() => isOverlayOff.set(true)}>
                    &times;
                </button>
                
            </div>
        </div>
    {/if}

</body>


