<?php 

$mahasiswa = [
    [
        "nama" => "Wahyu",
        "nrp" => "043040023",
        "email" => "wahyu@mail.com"
    ],
    [
        "nama" => "Eko",
        "nrp" => "043040023",
        "email" => "eko@mail.com"
    ]
];

$data = json_encode($mahasiswa);
echo $data;

?>