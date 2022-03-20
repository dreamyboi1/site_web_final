<script>

    export let price;
    export let title;
    export let description;
    export let weight;
    export let uselessness;
    export let battery;
    export let location;
    export let size;
    export let imgUrl;
    export let productId;
    
    import supabase from "$lib/db.js";
    import { user } from "$lib/sessionStore";

    async function sendData(userId, productId) {
        const { data, error } = await supabase
            .from('cart')
            .insert([
            { 'user_id': userId, 'product_id' : productId, 'quantity' : 1}
        ])
        if (error) throw new Error(error.message)
    }

</script>

    <div class="w-1/2 min-w-[100px] max-w-[300px] group rounded-lg shadow-lg border-2 border-solid border-transparent bg-slate-100 hover:bg-slate-800 hover:hover:border-yellow-500">
        <div class="relative pb-3/5 rounded-lg shadow-lg m-3">
            <img class="absolute w-full h-full object-cover rounded-lg"
            src={imgUrl}
            alt={title} />
        </div>
        <div class="bg-blue-500 text-white group-hover:bg-white group-hover:text-slate-800 p-4 rounded-lg shadow-lg m-3">
            <h4 class="text-center pb-2 text-xl font-semibold tracking-tight">{title}</h4>
            <p class="leading-normal pb-4 text-justify ">{description}</p>
        
            <table class="text-center w-full table-auto ">
                <tbody>
                    <tr>
                        <td>Weight</td>
                        <td>{weight} Kg</td>
                    </tr>
                    <tr>
                        <td>Size</td>
                        <td >{size}</td>
                    </tr>
                    <tr>
                        <td>Autonomy</td>
                        <td >{battery}</td>
                    </tr>
                    <tr>
                        <td>Uselessness</td>
                        <td >{uselessness}</td>
                    </tr>
                    <tr>
                        <td>Origin</td>
                        <td >{location}</td>
                    </tr>

                </tbody>
            </table>
        </div>

        <div class="flex justify-between items-center px-12 py-4">
            <h4 class="text-center text-xl font-semibold tracking-tight mb-7
            sm:mb-1 text-yellow-600">{price} €</h4>
            <button class="shadow-lg bg-blue-500 hover:bg-gray-300 text-white font-bold mb-3 md:mb-2 sm:mb-1 py-2 px-4 rounded inline-flex items-center"
            on:click={sendData(productId)}>
                <img class="w-4 h-4 mr-2"
                src="../static/shopping-cart.png" 
                alt="add to cart"/>
                <span>+</span>
            </button>
        </div>

    </div>

