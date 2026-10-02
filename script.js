
document.addEventListener('DOMContentLoaded', function () {

    
    var form = document.getElementById('form-voting');
    var inputNama = document.getElementById('nama');
    var inputEmail = document.getElementById('email');
    var selectMusisi = document.getElementById('musisi');
    var textareaAlasan = document.getElementById('alasan');

   
    var errorNama = document.getElementById('error-nama');
    var errorEmail = document.getElementById('error-email');
    var errorMusisi = document.getElementById('error-musisi');
    var errorAlasan = document.getElementById('error-alasan');

   
    function tampilkanError(inputElement, errorElement, pesan) {
        errorElement.textContent = pesan;       
        inputElement.classList.add('invalid'); 

   
    function hapusError(inputElement, errorElement) {
        errorElement.textContent = '';
        inputElement.classList.remove('invalid');
    }

    function isEmailValid(email) {
        var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(email);
    }

    form.addEventListener('submit', function (event) {

     
        var nilaiNama = inputNama.value.trim();
        var nilaiEmail = inputEmail.value.trim();
        var nilaiMusisi = selectMusisi.value;
        var nilaiAlasan = textareaAlasan.value.trim();

        hapusError(inputNama, errorNama);
        hapusError(inputEmail, errorEmail);
        hapusError(selectMusisi, errorMusisi);
        hapusError(textareaAlasan, errorAlasan);

    
        var formValid = true;

       
        if (nilaiNama === '') {
            tampilkanError(inputNama, errorNama, 'Nama tidak boleh kosong.');
            formValid = false;
        }

        
        if (nilaiEmail === '') {
            tampilkanError(inputEmail, errorEmail, 'Email tidak boleh kosong.');
            formValid = false;
        } else if (!isEmailValid(nilaiEmail)) {
            tampilkanError(inputEmail, errorEmail, 'Format email tidak valid.');
            formValid = false;
        }

     
        if (nilaiMusisi === '') {
            tampilkanError(selectMusisi, errorMusisi, 'Silakan pilih salah satu musisi.');
            formValid = false;
        }

       
        if (nilaiAlasan === '') {
            tampilkanError(textareaAlasan, errorAlasan, 'Alasan tidak boleh kosong.');
            formValid = false;
        } else if (nilaiAlasan.length < 15) {
            tampilkanError(
                textareaAlasan,
                errorAlasan,
                'Alasan minimal 15 karakter (saat ini ' + nilaiAlasan.length + ' karakter).'
            );
            formValid = false;
        }

       
        if (!formValid) {
            event.preventDefault(); 
        }
    
    });

    
    inputNama.addEventListener('input', function () {
        hapusError(inputNama, errorNama);
    });
    inputEmail.addEventListener('input', function () {
        hapusError(inputEmail, errorEmail);
    });
    selectMusisi.addEventListener('change', function () {
        hapusError(selectMusisi, errorMusisi);
    });
    textareaAlasan.addEventListener('input', function () {
        hapusError(textareaAlasan, errorAlasan);
    });

});
