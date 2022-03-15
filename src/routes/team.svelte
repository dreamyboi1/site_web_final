<script>
    import Nav from "../components/nav.svelte";
    import TeamWidget from "../components/team_widget.svelte";


    let nbStaff = 8;

</script>

<div class="sticky z-10 top-0 left-0">
    <Nav></Nav>
</div>

<body class="bg-gray-900">
    <div class="grid place-items-center py-12">
        <div class="w-1/2">
            <h1 class="text-center font-semibold tracking-tight text-3xl">
                Here is our marvelous team!
            </h1>
        </div>
    </div>

    <div class="flex justify-center flex-wrap gap-6">

        {#each Array(nbStaff) as _, index}

            <TeamWidget></TeamWidget>
        

        {/each}

    </div>


</body>


