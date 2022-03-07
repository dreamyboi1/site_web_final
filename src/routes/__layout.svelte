<script>
    import supabase from "$lib/db.js";
    import {user} from "$lib/sessionStore";

    user.set(supabase.auth.user());
    //console.log($user);

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session?.user);
        console.log("AuthStateChange:", $user);
	});

</script>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<div class="bg-gray-900 text-white">
    <slot></slot>
</div>