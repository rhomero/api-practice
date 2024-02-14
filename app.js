console.log("Let's get this party started!");

async function getGif(e) {
    e.preventDefault();
    let searchTerm = $('#term').val();
    const gifs = await axios.get("http://api.giphy.com/v1/gifs/search", {params:{q:"hilarious", api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
   let number = Math.floor(Math.random() * gifs.data.data.length)
    console.log(gifs)
    console.log(number)
    console.log(gifs.data.data[number].url)
    let url = gifs.data.data[number].source;
    console.log(url)
    let alt = gifs.data.data[number].title;
    console.log(alt)
    //const url = 
    $('#imgBox').append(`<img src="${url}" alt="${alt}">`)
}  

$('form').on('submit', getGif);