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
    <div class="grid place-items-center py-12">
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
<!-- 
    {#if !$isOverlayOff}
    
        <div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center gap-3">

            <div class="flex bg-white text-black rounded-lg px-3 py-3 flex-wrap min-w-[100px] max-w-[700px] gap-4">

                <div class="flex flex-col">
                    <img src="../static/placeholder.png" alt="product1" class="w-full h-auto max-w-md"/>
                    <div class="flex justify-between items-center px-6 py-4">
                        <h4 class="text-center text-xl font-semibold tracking-tight mb-3 md:mb-2
                        sm:mb-1 text-yellow-600">123 €</h4>
                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mb-3 md:mb-2 sm:mb-1 py-2 px-4 rounded inline-flex items-center">
                            <img class="w-4 h-4 mr-2"
                            src="../static/shopping-cart.png" 
                            alt="add to cart"/>
                            <span class="text-white">+</span>
                        </button>
                    </div>
                </div>

                <div class="flex flex-col">
                    <h4 class="text-center py-2 text-xl font-semibold tracking-tight text-black">Title</h4>
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
                
                <button class="top-0 right-2 text-4xl text-black hover:-translate-y-0.5 transition-transform"
                on:click={() => isOverlayOff.set(true)}>
                    &times;
                </button>

            </div>
        </div>
    {/if}
 -->
</body>


