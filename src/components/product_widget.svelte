<script>
    export let price;
    export let title;

</script>

<div class="group rounded-lg shadow-lg border-2 border-solid border-gray-900 bg-slate-500 hover:bg-slate-800 hover:hover:border-yellow-500 w-1/5">
    <div class="relative pb-3/5">
        <img class="absolute w-full h-full object-cover rounded-t-lg"
        src="../static/placeholder.png"
        alt="product1" />
    </div>
    <div class="px-6">
        <h4 class="text-center py-3 text-xl font-semibold tracking-tight text-white">{title}</h4>
        <p class="leading-normal text-gray-900 group-hover:text-gray-100 text-justify">This is a smol description to briefly understand the product.</p>
        <p class="underline italic text-blue-400 leading-normal text-justify">See product info</p>
    </div>

    <div class="flex justify-between items-center px-6 py-4">
        <h4 class="text-center text-xl font-semibold tracking-tight mb-3 md:mb-2
        sm:mb-1 text-yellow-600">{price} €</h4>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mb-3 md:mb-2 sm:mb-1 py-2 px-4 rounded inline-flex items-center">
            <img class="w-4 h-4 mr-2"
            src="../static/shopping-cart.png" 
            alt="add to cart"/>
            <span class="text-white">+</span>
        </button>
    </div>

</div>