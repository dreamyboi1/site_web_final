<script>
    import Nav from "../components/nav.svelte";
    import Form from "../components/form.svelte";

    let email;
    let message;

    async function sendMessage(){
        try{
            const { data, error } = await supabase
            .from('messages')
            .insert(
                {email: email, message: message}
            )
            if (error) throw new Error(error.message)
            alert("Message sent!")
            location.reload()
            return data

        } catch (TypeError){
            console.log("No id attribute")
        } 
    }
</script>

<svelte:head>
    <title>Contact us! </title>
</svelte:head>

<div class="absolute w-full z-10">
    <Nav/>
</div>

<div class="text-gray-900 h-screen bg-pink-500 flex flex-col justify-center">
    <div class="w-2/3 p-4 self-center text-yellow-300 bg-blue-500 rounded-lg shadow-2xl flex flex-col gap-4">
        <p class="font-semibold text-2xl">Contact Us!</p>
        <form class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <legend for="email">E-mail:</legend>
                <input type="email" name="email" placeholder="Enter your E-Mail" bind:value={email} class="rounded-md bg-transparent text-yellow-300 w-full p-1 shadow-lg">
            </div>
            <div class="flex flex-col gap-2">
                <legend for="message">Your message:</legend>
                <textarea class="rounded-md bg-transparent text-yellow-300 w-full p-1 shadow-lg" bind:value={message} placeholder="What is your interesting idea?" name="message" ></textarea>
            </div>
        </form>
    </div>
</div>