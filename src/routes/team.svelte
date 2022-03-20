<script>
    import Nav from "../components/nav.svelte";
    import TeamWidget from "../components/team_widget.svelte";


</script>

<div class="sticky z-10 top-0 left-0">
    <Nav></Nav>
</div>

<body class="bg-pink-500">
    <div class="grid place-items-center py-12">
        <div class="w-1/2">
            <h1 class="text-center font-semibold tracking-tight text-3xl">
                Here is our marvelous team!
            </h1>
        </div>

    </div>

    <div class="flex flex-col gap-7">

        <p class="text-center text-red-400 font-semibold tracking-tight text-5xl">
            Our 3 founders
        </p>

        <section class="flex justify-center flex-wrap gap-6">
            {#each Array(3) as _, index}
                <TeamWidget></TeamWidget>
            {/each}
        </section>

        <p class="text-center text-red-400 font-semibold tracking-tight text-5xl">
            The Development Team
        </p>        

        <section class="flex justify-center flex-wrap gap-6">
            {#each Array(2) as _, index}
                <TeamWidget></TeamWidget>
            {/each}
        </section>

        
    </div>
    


</body>


