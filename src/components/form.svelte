<script>
    import supabase from "$lib/db.js"

    async function getData() {
        let { data, error } = await supabase
            .from('product')
            .select()
        if (error) throw new Error(error.message)
        return data
    }

    let newGame
    let submit = false
    async function sendData() {
        const { data, error } = await supabase
            .from('games')
            .insert([
            { 'title': newGame }
        ])
        if (error) throw new Error(error.message)
        
        return data
    }
</script>

<form>
    <p>Potential title</p>
    <legend for="email">Your E-Mail:</legend>
    <input id="email" type="text" class="text-gray-900 rounded-md focus:ring-red-700">
    
    
    <legend for="message">Your message:</legend>
    <input id="message" type="text" class="text-gray-900 rounded-md">
</form>




<!-- <h1>My favorite games</h1>
{#await getData()}
  <p>Fetching data...</p>
{:then data}
  {#each data as product}
    <li>{product.name}</li>
  {/each}
{:catch error}
  <p>Something went wrong while fetching the data:</p>
  <pre>{error}</pre>
{/await} -->