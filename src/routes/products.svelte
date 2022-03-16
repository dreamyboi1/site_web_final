<script>
    import Nav from "../components/nav.svelte";
    import ProductWidget from "../components/product_widget.svelte";

    /* async function getData() {
        let { data, error } = await supabase
            .from('product')
            .select()
        if (error) throw new Error(error.message)
        return data
    }

    let dbProduct = getData();

    console.log(dbProduct) */

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

        {#each Array(15) as _, index}

            <ProductWidget price={(Math.random()*150).toFixed(2)} title="Produit chelou n°{index+1}"></ProductWidget>

        {/each}

    </div>

</body>


