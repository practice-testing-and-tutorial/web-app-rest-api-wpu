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

                // console.log(movies);

                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card mb-3">
                                <img src="${data.Poster}" class="card-img-top">
                                <div class="card-body">
                                <h6 class="card-subtitle mb-2 text-muted">${data.imdbID}</h6>
                                <p class="card-text">${data.Year}</p>
                                    <h5 class="card-title">${data.Title}</h5>
                                    <a href="#" class="card-link see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.imdbID}">See details</a>
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

$('#movie-list').on('click', '.see-detail', function(){ // event binding or event delegation
    console.log($(this).data('id'));
    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'f28921a4',
            'i': $(this).data('id')
        },
        success: function(result){
            if(result.Response === "True"){
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="${result.Poster}" class="img-fluid">
                            </div>

                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><h3>${result.Title}</h3></li>
                                    <li class="list-group-item">Released: ${result.Released}</li>
                                    <li class="list-group-item">Genre: ${result.Genre}</li>
                                    <li class="list-group-item">Director: ${result.Director}</li>
                                    <li class="list-group-item">Actors: ${result.Actors}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `);
            }
            else {
                //
            }
        }
    });
});