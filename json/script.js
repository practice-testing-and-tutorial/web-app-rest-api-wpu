// let mahasiswa = {
//     nama: "Wahyu",
//     nrp: "040305230",
//     email: "wahyu@mail.com"
// }

// console.log(JSON.stringify(mahasiswa));

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200){
        let mahasiswa = JSON.parse(this.responseText);
        console.log(mahasiswa);
    }
}

xhr.open('GET', 'coba.json', true); // true - asyncly
xhr.send();