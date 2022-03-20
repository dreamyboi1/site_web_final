<script>

    export let urlImgTeam;
    export let nameT;
    export let roleT;
    export let quote;


</script>


<div class="w-1/2 min-w-[100px] max-w-[300px] group rounded-lg rounded-t-3xl shadow-lg border-2 border-solid border-transparent bg-blue-500 hover:bg-slate-800 hover:border-yellow-500">
    <div class="relative pb-3/5 rounded-full shadow-lg m-3">
        <img class="absolute w-full h-full object-cover rounded-full"
        src={urlImgTeam}
        alt={nameT} />
    </div>
    <div class="bg-slate-500 text-white group-hover:bg-white group-hover:text-slate-800 p-4 rounded-lg shadow-lg m-3">
        <h4 class="text-center pb-2 text-xl font-semibold tracking-tight">{nameT}</h4>
        <p class="leading-normal italic pb-2 text-justify">{roleT}</p>
    </div>

    <div class="bg-slate-500 text-white group-hover:bg-white group-hover:text-slate-800 p-4 rounded-lg shadow-lg m-3">
        <h4 class="text-center text-xl font-semibold tracking-tight mb-7
        sm:mb-1 text-yellow-500">{quote}</h4>
    </div>

</div>
