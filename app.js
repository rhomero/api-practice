console.log("Let's get this party started!");

async function getGif(e) {
    e.preventDefault();
    let searchTerm = $('#term').val();
    const gif = await axios.get("http://api.giphy.com/v1/gifs/search", {params:{q:"hilarious", api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
    //console.log(gif);
}  

$('form').on('submit', getGif);