/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

//memyimpan informasi email dan password
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

//memberi aksi kepada tombol
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  //memberikan nilai kepada setiap inputan email dan password
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;
  
  //mengecek email dan password
  if (email == expectedEmail && password == expectedPassword) {
    //jika benar akan diarahkan ke halaman utama/berikutnya
    goToHome();
  } else {
    //jika salah akan memunculkan pop up
    showPopUp();
  }
});
