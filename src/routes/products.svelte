<script>
    import Nav from "../components/nav.svelte";
    import ProductWidget from "../components/product_widget.svelte";

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
</body>


