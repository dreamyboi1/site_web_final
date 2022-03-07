<script>
    import Nav from "../components/nav.svelte";
import Cart from "./cart.svelte";
</script>

<Nav/>

<body>
    <div class="flex justify-center flex-wrap">

        <div class="mx-4 mb-2 rounded-lg shadow-lg bg-slate-500 w-1/4 min-w-[200px] max-w-[300px]">
            <img class="w-full h-48 rounded-t-lg"
                src="../static/placeholder.png"
                alt="product1" />
            <div class="px-6 py-4">
                <h4 class="text-center mb-3 text-xl font-semibold tracking-tight text-white">Product 1</h4>
                <p class="leading-normal mb-3 text-gray-900 text-justify">This is a smol description to briefly understand the product.</p>
                <div>
                    <h4 class="text-center mb-3 text-xl font-semibold tracking-tight text-yellow-600">100.00 €</h4>
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <img class="w-4 h-4 mr-2"
                        src="../static/shopping-cart.png" 
                        alt="add to cart"/>
                        <span class="text-red-700">+</span>
                  </button>
                </div>
                
            </div>
        </div>

        <div class="flex justify-center flex-wrap">

            <div class="mx-4 mb-2 rounded-lg shadow-lg bg-slate-500">
                <img class="w-full h-48 rounded-t-lg"
                    src="../static/placeholder.png"
                    alt="product1" />
                <div class="px-6 py-4">
                    <h4 class="text-center mb-3 text-xl font-semibold tracking-tight text-white">Product 2</h4>
                    <p class="leading-normal text-gray-900 ">This is a description</p>
                </div>
            </div>

        </div>
    </div>
</body>


