document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    
    // Elements for result display
    const resTime = document.getElementById('res-time');
    const resNama = document.getElementById('res-nama');
    const resTgl = document.getElementById('res-tgl');
    const resGender = document.getElementById('res-gender');
    const resPesan = document.getElementById('res-pesan');

    if (messageForm) {
        messageForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const nama = document.getElementById('nama').value;
            const tglLahir = document.getElementById('tgl_lahir').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const pesan = document.getElementById('pesan').value;

            // Get current time
            const now = new Date();
            const timeString = now.toString();

            // Update result display
            resTime.textContent = `Current time : ${timeString}`;
            resNama.textContent = nama;
            resTgl.textContent = tglLahir;
            resGender.textContent = gender;
            resPesan.textContent = pesan;

            console.log('Form submitted successfully');
        });
    }
});
