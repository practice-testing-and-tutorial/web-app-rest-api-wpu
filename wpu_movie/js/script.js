function searchMovie(){
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'f28921a4',
            's': $('#search-input').val()
        },
        success: function(result){
            $('#movie-list').html('');
            if(result.Response == "True"){
                let movies = result.Search;

                console.log(movies);

                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card mb-3">
                                <img src="${data.Poster}" class="card-img-top">
                                <div class="card-body">
                                <h6 class="card-subtitle mb-2 text-muted">${data.imdbID}</h6>
                                <p class="card-text">${data.Year}</p>
                                    <h5 class="card-title">${data.Title}</h5>
                                    <a href="#" class="card-link" data-bs-toggle="modal" data-bs-target="#exampleModal">See details</a>
                                </div>
                            </div>
                        </div>
                    `);
                });

                $('#search-input').val('');
            }
            else {
                $('#movie-list').html(`<h1 class="text-center">${result.Error}</h1>`);
            }
        }
    });
}

$('#search-button').on('click', function(){
    searchMovie();
});

$('#search-input').on('keyup', function(e){
    if(e.which === 13){
        searchMovie();
    }
    else if(e.which === 27){
        $('#search-input').val('');
    }
});