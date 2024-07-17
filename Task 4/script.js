const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const Name = document.getElementById('Name').value;
  const user = document.getElementById('user').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const Confirmpassword = document.getElementById('Confirmpassword').value;

  if (Name.length < 2) {
    alert('Name must be at least 2 characters long!');
    return;
  }

  if (user.length < 4) {
    alert('Username must be at least 4 characters long!');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert('Invalid email address!');
    return;
  }

  if (phone.length !== 10) {
    alert('Phone number must be 10 digits long!');
    return;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters long!');
    return;
  }
  if (password !== Confirmpassword) {
    alert('Passwords do not match!');
    return;
  }

  alert('Form submitted successfully!');
});
