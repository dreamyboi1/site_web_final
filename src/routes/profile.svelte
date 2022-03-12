<script>
    import Nav from "../components/nav.svelte"
    import supabase from "$lib/db.js";
    import {user} from "$lib/sessionStore.js";


    /* asnyc function profileExists(){
        const {user, error} = await supabase.auth.api.getUser(

        )
    } */

    function updateProfile(){

    }
</script>


<Nav/>

<h1>My Profile</h1>

<h1 class="text-center font-semibold tracking-tight text-3xl">
    My Profile
</h1>

