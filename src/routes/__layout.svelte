<script>
    import supabase from "$lib/db.js";
    import {user} from "$lib/sessionStore";

    user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session?.user);
        console.log("AuthStateChange:", $user);
	});


</script>

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=Oswald:wght@200;400;600;700&family=Roboto+Slab:wght@400;600;700&display=swap" rel="stylesheet">    
</head>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<div class="bg-pink-500 text-white font-oswald">
    <slot></slot>
</div>