document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signup-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const dob = document.getElementById('dob').value;
        const pdf = document.getElementById('pdf').value;

        if (name.trim() === '' || phone.trim() === '' || email.trim() === '' || dob.trim() === '' || pdf.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        this.submit();
    });
});
