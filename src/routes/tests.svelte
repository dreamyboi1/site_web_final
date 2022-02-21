<script>
    
    let url_list = ["https://cdn.pixabay.com/photo/2022/02/14/12/03/craniosacral-7012994_1280.jpg", "https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_1280.jpg"];
    let choice = 0;
    function increase_index(){
        choice += 1;
    }
    function decrease_index(){
        choice -= 1;
    }
</script>




<h3 class="text-center">
    Hello! This is our website!
</h3>
<p>
    You have selected the image with number: {choice}.
</p>

<button on:click={increase_index}>
    Increase index
</button>

<button on:click={decrease_index}>
    Decrease index
</button>

<img src={url_list[choice]} alt="random img">

