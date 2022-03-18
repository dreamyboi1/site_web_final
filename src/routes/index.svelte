<script>
    import Nav from "../components/nav.svelte";
</script>

<svelte:head>
    <title>Our store</title>
</svelte:head>

<Nav/>


<section id="hero_text" class="grid place-items-center bg-pink-500">

    <div class="p-8 grid max-w-7xl place-items-center gap-8 grid-cols-2 lg:grid-cols-5 lg:grid-rows-3 sm:grid-cols-3">
        <p class="text-4xl text-yellow-300 font-extrabold col-span-2 lg:col-span-3">
            Useless market.
            A selection of 15 products that have one purpose: <span class="text-blue-500">None.</span>
        </p>
            
        <img class="lg:col-start-5 aspect-square object-cover rounded-md shadow-xl" src="/static/img_index/concrete_umbrella.jpg" alt="A concrete umbrella" >
        <p class="sm:self-center col-span-2 text-yellow-300  font-semibold">
            Lorem ipsum dolor sit amet consectetur 
        </p>
        <img class="aspect-square object-cover rounded-md" src="/static/img_index/uncomfortable_teapot.jpg" alt="A concrete umbrella" >
        <img class="aspect-square object-cover rounded-md hover:scale-125" src="/static/img_index/long_mug.jpg" alt="A concrete umbrella" >
        <img class="aspect-square object-cover rounded-md hover:scale-125" src="/static/img_index/thick_button.jpg" alt="A concrete umbrella" >
        <img class="lg:col-start-2 aspect-square object-cover rounded-md hover:scale-125" src="/static/img_index/rain_boots.jpg" alt="A concrete umbrella" >
        <img class="aspect-square object-cover rounded-md" src="/static/img_index/fork1.jpg" alt="A concrete umbrella" >
        <img class="aspect-square object-cover rounded-md hover:shadow-lg hover:shadow-red-300" src="/static/img_index/pedal_less_bicycle.jpg" alt="A concrete umbrella" >
        <img class="aspect-square object-cover rounded-md" src="/static/img_index/slide.jpg" alt="A concrete umbrella" >


    </div>

</section>
<span class="w-full "> </span>
<section id="history" class="w-full flex flex-col bg-pink-500 text-yellow-300">
    <p class="text-4xl font-semibold mx-auto p-6">History of Useless Design</p>
    <p class="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas consequatur quasi illo, possimus assumenda odio totam molestiae inventore aspernatur quos! Similique quisquam nemo consequatur, sunt minus iste, officia deserunt iusto commodi consectetur vitae nisi sequi! Hic soluta corporis possimus aspernatur.</p>
</section>