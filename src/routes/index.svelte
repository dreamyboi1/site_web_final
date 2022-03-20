<script>
    import Nav from "../components/nav.svelte";
</script>

<svelte:head>
    <title>Useless Market</title>
</svelte:head>

<div class="sticky z-10 top-0 left-0">
    <Nav></Nav>
</div>


<section id="hero_text" class="grid place-items-center bg-pink-500 pt-6 md:pt-0">

    <div class="p-8 grid max-w-7xl place-items-center gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:grid-rows-3 ">
        <p class="text-4xl text-yellow-300 font-extrabold col-span-2 lg:col-span-3">
            Useless market.
            A selection of 15 products that have one purpose: <span class="text-blue-500">None.</span>
        </p>
            
        <img class="lg:col-start-5 aspect-square object-cover rounded-md shadow-xl" src="/static/img_index/concrete_umbrella.jpg" alt="A concrete umbrella" >
        <img class="aspect-square object-cover rounded-md" src="/static/img_index/uncomfortable_teapot.jpg" alt="A concrete umbrella" >
        <img class="aspect-square object-cover rounded-md" src="/static/img_index/long_mug.jpg" alt="A concrete umbrella" >
        <img class="aspect-square object-cover rounded-md" src="/static/img_index/thick_button.jpg" alt="A concrete umbrella" >
        <img class="aspect-square object-cover rounded-md" src="/static/img_index/fork2.jpg" alt="A concrete umbrella" >
        <img class="aspect-square object-cover rounded-md" src="/static/img_index/rain_boots.jpg" alt="A concrete umbrella" >
        <img class="aspect-square object-cover rounded-md" src="/static/img_index/fork1.jpg" alt="A concrete umbrella" >
        <img class="aspect-square object-cover rounded-md" src="/static/img_index/pedal_less_bicycle.jpg" alt="A concrete umbrella" >
        <img class="aspect-square object-cover rounded-md" src="/static/img_index/slide.jpg" alt="A concrete umbrella" >
        
        <p class="lg:col-span-2 text-yellow-300 font-semibold">
            Designed, Developed and Maintained by Armand & Oskar.
        </p>


        <a href="/products" class="bg-yellow-300 col-span-2 sm:col-span-3 lg:col-span-5 p-4 uppercase text-blue-500 rounded-md shadow-lg font-semibold">
            Explore our selection!
        </a>
    </div>

</section>