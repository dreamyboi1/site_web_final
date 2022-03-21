<script>
    import Nav from "../components/nav.svelte";
</script>

<svelte:head>
    <title>Useless Market</title>
</svelte:head>

<div class="sticky z-10 top-0 left-0 w-full">
    <Nav></Nav>
</div>


<section id="hero_text" class="grid place-items-center bg-pink-500 pt-6 md:pt-0">

    <div class="p-8 grid max-w-7xl place-items-center gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:grid-rows-3 ">
        <p class="text-4xl text-yellow-300 font-extrabold col-span-2 lg:col-span-3">
            Useless market.
            A selection of 15 products that have one purpose: <span class="text-blue-500">None.</span>
        </p>
            
        <img class="lg:col-start-5 aspect-square object-cover rounded-md shadow-xl" src="https://ngupsypurpveskmdgato.supabase.in/storage/v1/object/sign/images/product_images/concrete_umbrella.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdF9pbWFnZXMvY29uY3JldGVfdW1icmVsbGEuanBnIiwiaWF0IjoxNjQ3ODE4MDA4LCJleHAiOjE5NjMxNzgwMDh9.yyzC4QCWK8DhlpEWD0rrnaXfTtRIxPOYFQgL4mAmFWQ"
            alt="Concrete Umbrella" >
       <img class="aspect-square object-cover rounded-md" src="https://ngupsypurpveskmdgato.supabase.in/storage/v1/object/sign/images/product_images/uncomfortable_teapot.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdF9pbWFnZXMvdW5jb21mb3J0YWJsZV90ZWFwb3QuanBnIiwiaWF0IjoxNjQ3ODE4MDMxLCJleHAiOjE5NjMxNzgwMzF9.riVGIrqWTN9-0x_TJMi9QyA756eFubFNF1L0_HOgZXo"
            alt="Unconfortable Teapot" >
        <img class="aspect-square object-cover rounded-md" src="https://ngupsypurpveskmdgato.supabase.in/storage/v1/object/sign/images/product_images/long_mug.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdF9pbWFnZXMvbG9uZ19tdWcuanBnIiwiaWF0IjoxNjQ3ODE4MTExLCJleHAiOjE5NjMxNzgxMTF9.2_nH8Hwz_4iynZeb1L--3dULct9yGZciFyg2RS8Lw-o"
            alt="Long Mug" >
        <img class="aspect-square object-cover rounded-md" src="https://ngupsypurpveskmdgato.supabase.in/storage/v1/object/sign/images/product_images/thick_button.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdF9pbWFnZXMvdGhpY2tfYnV0dG9uLmpwZyIsImlhdCI6MTY0NzgxODA3MCwiZXhwIjoxOTYzMTc4MDcwfQ.OzLAHn0cKNQO5LImKk8kQ9_sfTqP-PlsVD5PbQLghFw"
            alt="Thick Button" >
        <img class="aspect-square object-cover rounded-md" src="https://ngupsypurpveskmdgato.supabase.in/storage/v1/object/sign/images/product_images/rain_boots.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdF9pbWFnZXMvcmFpbl9ib290cy5qcGciLCJpYXQiOjE2NDc4MTgyMjAsImV4cCI6MTk2MzE3ODIyMH0.XCJqUqpmZ7SAloKOASA1Lk-32wK4tLeLuYCVddnH3mI"
            alt="Rain Shoes" >
        <img class="aspect-square object-cover rounded-md" src="https://ngupsypurpveskmdgato.supabase.in/storage/v1/object/sign/images/product_images/fork1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdF9pbWFnZXMvZm9yazEuanBnIiwiaWF0IjoxNjQ3ODE4MjQyLCJleHAiOjE5NjMxNzgyNDJ9.qYOaJvSaQaOVvOgbPYdNJmXCsPPfYFSiwZOvBkPlyAA"
            alt="Fork" >
        <img class="aspect-square object-cover rounded-md" src="https://ngupsypurpveskmdgato.supabase.in/storage/v1/object/sign/images/product_images/fork1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdF9pbWFnZXMvZm9yazEuanBnIiwiaWF0IjoxNjQ3ODE4MjQyLCJleHAiOjE5NjMxNzgyNDJ9.qYOaJvSaQaOVvOgbPYdNJmXCsPPfYFSiwZOvBkPlyAA"
            alt="Bike" >
        <img class="aspect-square object-cover rounded-md" src="https://ngupsypurpveskmdgato.supabase.in/storage/v1/object/sign/images/product_images/slide.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZHVjdF9pbWFnZXMvc2xpZGUuanBnIiwiaWF0IjoxNjQ3ODE4MzI2LCJleHAiOjE5NjMxNzgzMjZ9.ENNsTbjwWtk_vEqbLlFyAWgMwD5i1qByn0-cYgB-CPE"
            alt="Slide" >
        
        <p class="lg:col-span-2 text-yellow-300 font-semibold">
            Designed, Developed and Maintained by Armand & Oskar.
        </p>


        <a href="/products" class="bg-yellow-300 col-span-2 sm:col-span-3 lg:col-span-5 p-4 uppercase text-blue-500 rounded-md shadow-lg font-semibold">
            Explore our selection!
        </a>
    </div>

</section>