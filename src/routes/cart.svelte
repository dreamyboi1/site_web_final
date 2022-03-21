<script>
    import Nav from "../components/nav.svelte"
    import supabase from "$lib/db.js";
    import {user} from "$lib/sessionStore.js";

    export let sum = 0;

    function computeSum(toBeAdded){
        (sum += toBeAdded).toFixed(2)
        return ''
    }

    async function getData() {
        let { data, error } = await supabase
            .from('cart')
            .select()
            .eq("user_id", $user.id)
        if (error) throw new Error(error.message)
        return data;
    }

</script>

<svelte:head>
    <title>Your Cart</title>
</svelte:head>

    
<div class="sticky z-10 top-0 left-0 w-full">
    <Nav/>
</div>

<body class="text-gray-900 bg-pink-500">

    <div class="flex flex-col justify-center m-20">

        <div class="mb-10 p-4 self-center text-yellow-300 bg-blue-500 rounded-lg shadow-2xl flex flex-col gap-4">
            <p class="text-center font-semibold text-2xl">Your Cart</p>

            {#await getData()}
                <p>Fetching data...</p>
            {:then data}
            <div class="rounded-lg bg-blue-400 p-4">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item</th>
                            <th>Quatity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    
                    <tbody class="">
                    {#each data as item}
                        
                        {computeSum(item.product_price)}

                        <tr>
                            <td class="p-3 m-3"><img src={item.img_url}
                                    alt={item.product_title} class="rounded-lg w-28"></td>
                            <td class="p-3 m-3">{item.product_title}</td>
                            <td class="p-3 m-3">{item.quantity}</td>
                            <td class=" m-3">{item.product_price} €</td>
                        </tr>
                    
                    {/each}

                        <tr class="italic">
                            <td></td>
                            <td>Total</td>
                            <td></td>
                            <td>{sum.toFixed(2)} €</td>

                        </tr>
                    </tbody>
                
                </table>
            </div>

            {:catch error}
            <p>Something went wrong while fetching the data:</p>
            <pre>{error}</pre>
            {/await}

        </div>

        <div class="self-center rounded-lg bg-yellow-500 p-4 shadow-lg">
            <button on:click={() => alert("Work in Progress / Future Fonctionalitiy")}
                >Proceed to Payment</button>
        </div>
    </div>

</body>