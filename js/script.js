console.log ('javascript is running')

// Fungsi validasi form
function validasiForm() {
    // ambil DOM Input Name di Form
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const tujuanInput = document.getElementById('tujuan-input');
    
    // kondisi tertentu
    if (nameInput.value.trim() === '') {
        alert('Nama Anda Kosong');
    }   else if(emailInput.value.trim() === ''){
        alert('Email Anda Kosong');
    }   else if (!emailInput.value.includes('@')) {
        alert('Format Email Tidak Valid. Tambahkan @ untuk melanjutkan');
    }   else if(tujuanInput.value === '-'){
        alert('Tolong Pilih Tujuan');
    }   else {
        alert('Berhasil Mengirim Form');
    }
}

    const listBanner = document.getElementsByClassName('banner-img');
    let indexBanner = 0;
    processBanner();
    
    // Next Banner
    function nextBanner() {
        indexBanner += 1;

        processBanner();
    }

// Fungsi Process Banner
function processBanner() {
    console.log(listBanner);

    // Jika indexBanner lebih dari panjang list banner
    // maka indexBanner di set ke 0
    if (indexBanner >= listBanner.length) {
        indexBanner = 0;
    }

    // Hide All Banner
    for (let index = 0; index < listBanner.length; index++) {
        listBanner[index].style.display = 'none';
    }

    // panggil show Banner
    showBanner(indexBanner);
}

// Fungsi Show Banner
function showBanner(index) {
    listBanner[index].style.display = 'block';
}

// untuk otomasi
setInterval(nextBanner, 3000);