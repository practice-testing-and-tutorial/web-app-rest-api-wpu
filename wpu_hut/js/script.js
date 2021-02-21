getData = function(i, data){
    $('#daftar-menu').append(`<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/${data.gambar}" class="card-img-top"><div class="card-body"><h5 class="card-title">${data.nama}</h5><p class="card-text">${data.deskripsi}</p><h5 class="card-title">IDR ${data.harga},-</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>`);
}

createObject = function(data) {
    let menu = data.menu;

    $.each(menu, getData);
}


navOnClick = function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let cat = $(this).html();
    $('h1').html(cat);

    if(cat == 'All Menu'){
        $.getJSON('data/pizza.json', createObject);
        return;
    }

    $.getJSON('data/pizza.json', function(data) {
        let menus = data.menu;
        let cont = '';
        $.each(menus, function(i, data){
            if(data.kategori == cat.toLowerCase()){
                cont += `<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/${data.gambar}" class="card-img-top"><div class="card-body"><h5 class="card-title">${data.nama}</h5><p class="card-text">${data.deskripsi}</p><h5 class="card-title">IDR ${data.harga},-</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>`;
            }
        });

        $('#daftar-menu').html(cont);
    });
}

$.getJSON('data/pizza.json', createObject);
$('.nav-link').on('click', navOnClick);