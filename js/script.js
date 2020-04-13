function allMenu() {
    $.getJSON('data/menu.json', function (result) {
        const menu = result.menu;
        $.each(menu, function (i, data) {
            $("#daftar-menu").append('<div class="col-md-4 mb-4"><div class="card"><img src="img/menu/' + data.gambar + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.name + '</h5><p class="card-text">Rp. ' + data.harga + ',-</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>')
        })
    })
}

allMenu();

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    const titleName = $(this).html();
    $('#titleMenu').html(titleName);

    if(titleName == 'All Menu'){
        $('#daftar-menu').empty();
        allMenu();
        return;
    }

    $.getJSON('data/menu.json', function (result) {
        let menu = result.menu;
        let content = '';
        $.each(menu, function (i, data) {
            if(data.kategori == titleName){
                content += '<div class="col-md-4 mb-4"><div class="card"><img src="img/menu/' + data.gambar + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + data.name + '</h5><p class="card-text">Rp. ' + data.harga + ',-</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        })
        $('#daftar-menu').html(content);
    })
})