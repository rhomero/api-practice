console.log("Let's get this party started!");
let display = false;

async function getGif(e) {
    e.preventDefault();
    if(display){$('#alert').addClass('d-none');}
    try{
    let searchTerm = $('#term').val();
    const gifs = await axios.get("https://api.giphy.com/v1/gifs/search", {params:{q:searchTerm, api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}});
    let number = Math.floor(Math.random() * gifs.data.data.length)
    let url = gifs.data.data[number].images.original.url;
    
    let alt = gifs.data.data[number].title;
 
    $('#imgBox').append(`<img src="${url}" alt="${alt}">`)
    $('#term').val("");
    } catch(error){
        $('#alert').removeClass('d-none');
        display = true;
    }
}  

$('form').on('submit', getGif);
$('#delete').on('click', function(){
    $('#imgBox').empty();
})