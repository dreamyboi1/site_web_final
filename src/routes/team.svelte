<script>
    import Nav from "../components/nav.svelte";
    import TeamWidget from "../components/team_widget.svelte";


</script>

<svelte:head>
    <title>Our Team</title>
</svelte:head>

<div class="sticky z-10 top-0 left-0 w-full">
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

        <p class="text-center text-yellow-500 font-semibold tracking-tight text-5xl">
            Our 3 founders
        </p>

        <section class="flex justify-center flex-wrap gap-6">
            <TeamWidget nameT="Bill" roleT="Co-Founder" quote="''If you can't make it good, at least make it look good.''"
            urlImgTeam="https://ngupsypurpveskmdgato.supabase.in/storage/v1/object/sign/images/Team/bill.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvVGVhbS9iaWxsLmpwZyIsImlhdCI6MTY0Nzc5NjA0MiwiZXhwIjoxOTYzMTU2MDQyfQ.NzeZ2Jy7p3mlm2sWga_1xHkPGjWoKLF2MbBv5EofbFU"></TeamWidget>
            <TeamWidget nameT="Elon" roleT="Co-Founder" quote="''I would like to die on Mars. Just not on impact.''"
            urlImgTeam="https://ngupsypurpveskmdgato.supabase.in/storage/v1/object/sign/images/Team/elon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvVGVhbS9lbG9uLmpwZyIsImlhdCI6MTY0Nzc5NjIyOCwiZXhwIjoxOTYzMTU2MjI4fQ.5CWxfgLFJBNyVGT4Qthtr3Mt63wfnwTBkh5wrUP8X70"></TeamWidget>
            <TeamWidget nameT="Jeff" roleT="Co-Founder" quote="''For people who are readers, reading is important to them.''"
            urlImgTeam="https://ngupsypurpveskmdgato.supabase.in/storage/v1/object/sign/images/Team/jeff.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvVGVhbS9qZWZmLmpwZyIsImlhdCI6MTY0Nzc5NjUyMywiZXhwIjoxOTYzMTU2NTIzfQ.RlluDENd2ZJ-HStc2KPeLc7gtq8HAvRQNwETdGOvCZw"></TeamWidget>
            </section>

        <p class="text-center text-yellow-500 font-semibold tracking-tight text-5xl">
            The Development Team
        </p>        

        <section class="flex justify-center flex-wrap gap-6">
            <TeamWidget nameT="Oskar" roleT="Website Maintenance" quote="''Respect yourself and others will respect you.''"
            urlImgTeam="https://ngupsypurpveskmdgato.supabase.in/storage/v1/object/sign/images/Team/oskar.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvVGVhbS9vc2thci5qcGciLCJpYXQiOjE2NDc3OTkwODgsImV4cCI6MTk2MzE1OTA4OH0.IqyTgTP7hZ90aSfObg-GCwlCaHDYm-K4eI0OrHvD-OE"></TeamWidget>
            <TeamWidget nameT="Armand" roleT="Website Maintenance" quote="''Life is really simple, but we insist on making it complicated.''"
            urlImgTeam="https://ngupsypurpveskmdgato.supabase.in/storage/v1/object/sign/images/Team/armand.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvVGVhbS9hcm1hbmQuanBnIiwiaWF0IjoxNjQ3Nzk5MDYwLCJleHAiOjE5NjMxNTkwNjB9.FENQN_cmR4khYDsVd9e2DYaQVmFi19sZITT--JObN1A"></TeamWidget>
        </section>

        
    </div>
    


</body>


