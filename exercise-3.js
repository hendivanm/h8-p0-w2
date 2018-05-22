var nama = "Jason"; "Zack"; "Billy"; "Kimberly";
var peran = "Ksatria"; "Tabib"; "Penyihir";

if (nama === "" && peran === "") {
    console.log ("Nama harus diisi!");
}

if (nama === "Jason" && peran === "") {
    console.log ("Halo Jason, Pilih peranmu untuk memulai game!");
} 

if (nama === "Zack" && peran === "Ksatria") {
    console.log ("Selamat datang di Dunia Proxytia, Zack");
    console.log ("Halo Ksatria Zack, kamu dapat menyerang dengan senjatamu!");
}

if (nama === "Billy" && peran === "Tabib") {
    console.log ("Selamat datang di Dunia Proxytia, Billy");
    console.log ("Halo Tabib Billy, kamu akan membantu temanmu yang terluka.");
}

if (nama === "Kimberly" && peran === "Penyihir") {
    console.log ("Selamat datang di Dunia Proxytia, Kimberly");
    console.log ("Halo Penyihir Kimberly, ciptakan keajaiban yang membantu kemenanganmu!");
}