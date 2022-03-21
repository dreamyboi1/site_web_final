<script>
    import Nav from "../components/nav.svelte";
    import Form from "../components/form.svelte";
    import supabase from "$lib/db.js";

    let email;
    let message;

    async function sendMessage(){
        try{
            const { data, error } = await supabase
                .from('messages')
                .insert([
            {email: email, message: message}])
            alert("Message sent!")
        }
        catch(error){
            console.log(error.message)
        }
        
        //location.reload()
        return data
    }
</script>

<svelte:head>
    <title>Contact us! </title>
</svelte:head>

<div class="sticky z-10 top-0 left-0 w-full">
    <Nav/>
</div>

<div class="text-gray-900 h-screen bg-pink-500 flex flex-col justify-center">
    <div class="w-2/3 max-w-md p-4 self-center text-yellow-300 bg-blue-500 rounded-lg shadow-2xl flex flex-col gap-4">
        <p class="font-semibold text-2xl">Contact Us!</p>
        <form on:submit={sendMessage} class="flex flex-col gap-4">
            <div class="rounded-lg p-3 flex flex-col gap-2 bg-blue-300">
                <legend for="email">E-mail:</legend>
                <input type="email" name="email" placeholder="Enter your E-Mail" bind:value={email} class="rounded-md bg-transparent text-yellow-300 w-full p-1 shadow-lg">
            </div>
            <div class="flex flex-col gap-2 bg-blue-300 rounded-lg p-3">
                <legend for="message">Your message:</legend>
                <textarea class="rounded-md bg-transparent text-yellow-300 w-full p-1 shadow-lg" bind:value={message} placeholder="What is your interesting idea?" name="message" ></textarea>
            </div>

            <button type="submit" class="rounded-md bg-yellow-300 text-gray-900 py-1 shadow-lg">
                Send Message
            </button>
        </form>
    </div>
</div>