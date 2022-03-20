<script>

    export let urlImgTeam;
    export let nameT;
    export let roleT;
    export let quote;


</script>


<div class="w-1/2 min-w-[100px] max-w-[300px] rounded-lg rounded-t-3xl shadow-lg bg-white">
    <div class="relative pb-3/5 rounded-full shadow-lg m-3">
        <img class="absolute w-full h-full object-cover rounded-full"
        src={urlImgTeam}
        alt={nameT} />
    </div>
    <div class="bg-blue-500 text-white p-4 rounded-lg shadow-lg m-3">
        <h4 class="text-center pb-2 text-xl font-semibold tracking-tight">{nameT}</h4>
        <p class="leading-normal italic pb-2 text-justify">{roleT}</p>
    </div>

    <div class="bg-blue-500 text-white p-4 rounded-lg shadow-lg m-3">
        <h4 class="text-center text-xl font-semibold tracking-tight mb-7
        sm:mb-1 text-yellow-500">{quote}</h4>
    </div>

</div>
