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

</script>

    <div class="w-1/2 min-w-[100px] max-w-[300px] group rounded-lg shadow-lg border-2 border-solid border-transparent bg-slate-100 hover:bg-slate-800 hover:hover:border-yellow-500">
        <div class="relative pb-3/5 rounded-lg shadow-lg m-3">
            <img class="absolute w-full h-full object-cover rounded-lg"
            src={imgUrl}
            alt={title} />
        </div>
        <div class="bg-slate-800 text-white group-hover:bg-white group-hover:text-slate-800 p-4 rounded-lg shadow-lg m-3">
            <h4 class="text-center pb-2 text-xl font-semibold tracking-tight">{title}</h4>
            <p class="leading-normal pb-4 text-justify ">{description}</p>
        
            <table class="text-center w-full table-auto ">
                <tbody>
                    <tr>
                        <td>Weight</td>
                        <td class="text-red-700">{weight} Kg</td>
                    </tr>
                    <tr>
                        <td>Size</td>
                        <td class="text-red-700">{size}</td>
                    </tr>
                    <tr>
                        <td>Autonomy</td>
                        <td class="text-red-700">{battery}</td>
                    </tr>
                    <tr>
                        <td>Uselessness</td>
                        <td class="text-red-700">{uselessness}</td>
                    </tr>
                    <tr>
                        <td>Origin</td>
                        <td class="text-red-700">{location}</td>
                    </tr>

                </tbody>
            </table>
        </div>

        <div class="flex justify-between items-center px-12 py-4">
            <h4 class="text-center text-xl font-semibold tracking-tight mb-7
            sm:mb-1 text-yellow-600">{price} €</h4>
            <button class="shadow-lg bg-blue-500 hover:bg-gray-300 text-gray-200 hover:text-gray-700 font-bold mb-3 md:mb-2 sm:mb-1 py-2 px-4 rounded inline-flex items-center">
                <img class="w-4 h-4 mr-2"
                src="../static/shopping-cart.png" 
                alt="add to cart"/>
                <span>+</span>
            </button>
        </div>

    </div>

