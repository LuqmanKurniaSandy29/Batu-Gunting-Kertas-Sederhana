document.addEventListener('DOMContentLoaded', function () {
    const choices = ['rock', 'paper', 'scissors']; // Array berisi pilihan permainan
    const choicesImages = { // Objek yang berisi gambar untuk setiap pilihan
        'rock': 'img/rock.png',
        'paper': 'img/paper.png',
        'scissors': 'img/scissors.png'
    };

    // Menambahkan event listener pada setiap tombol pilihan
    document.querySelectorAll('.buttons button').forEach(button => {
        button.addEventListener('click', function () {
            const userChoice = this.id; // Mendapatkan pilihan user berdasarkan ID tombol yang diklik
            const computerChoice = choices[Math.floor(Math.random() * choices.length)]; // Mengacak pilihan komputer
            displayChoices(userChoice, computerChoice); // Menampilkan pilihan user dan komputer
            setTimeout(() => determineWinner(userChoice, computerChoice), 500); // Alert muncul 0.5 detik setelah memilih
        });
    });

    // Menambahkan event listener untuk tombol reset
    document.getElementById('reset').addEventListener('click', resetGame);

    // Fungsi untuk menampilkan pilihan user dan komputer
    function displayChoices(userChoice, computerChoice) {
        const userChoiceDiv = document.getElementById('user-choice-img');
        const computerChoiceDiv = document.getElementById('computer-choice-img');
        userChoiceDiv.innerHTML = ''; // Menghapus gambar sebelumnya
        computerChoiceDiv.innerHTML = ''; // Menghapus gambar sebelumnya

        // Membuat elemen gambar baru untuk pilihan user
        const userImg = document.createElement('img');
        userImg.src = choicesImages[userChoice];
        userImg.alt = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
        userChoiceDiv.appendChild(userImg);

        // Membuat elemen gambar baru untuk pilihan komputer
        const computerImg = document.createElement('img');
        computerImg.src = choicesImages[computerChoice];
        computerImg.alt = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        computerChoiceDiv.appendChild(computerImg);
    }

    // Fungsi untuk menentukan pemenang
    function determineWinner(userChoice, computerChoice) {
        let result = '';

        if (userChoice === computerChoice) {
            result = 'Seri!';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'Kamu Menang!';
        } else {
            result = 'Kamu Kalah!';
        }

        // Menampilkan hasil pertandingan menggunakan SweetAlert
        Swal.fire({
            title: result,
            icon: result === 'Kamu Menang!' ? 'success' : result === 'Kamu Kalah!' ? 'error' : 'info',
        });
    }

    // Fungsi untuk mereset game
    function resetGame() {
        const userChoiceDiv = document.getElementById('user-choice-img');
        const computerChoiceDiv = document.getElementById('computer-choice-img');
        userChoiceDiv.innerHTML = ''; // Menghapus gambar user
        computerChoiceDiv.innerHTML = ''; // Menghapus gambar komputer
    }
});
