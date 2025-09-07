// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode')
        ? 'Toggle Light Mode'
        : 'Toggle Dark Mode';
});

// FAQ Collapsible Section
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});

// Form Validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formSuccess = document.getElementById('form-success');

// Validate name (at least 2 characters)
function validateName(value) {
    if (value.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long';
        return false;
    }
    nameError.textContent = '';
    return true;
}

// Validate email (basic regex for email format)
function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        emailError.textContent = 'Please enter a valid email address';
        return false;
    }
    emailError.textContent = '';
    return true;
}

// Validate password (at least 8 characters, 1 number, 1 letter)
function validatePassword(value) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(value)) {
        passwordError.textContent = 'Password must be at least 8 characters long with 1 letter and 1 number';
        return false;
    }
    passwordError.textContent = '';
    return true;
}

// Real-time validation on input
nameInput.addEventListener('input', () => validateName(nameInput.value));
emailInput.addEventListener('input', () => validateEmail(emailInput.value));
passwordInput.addEventListener('input', () => validatePassword(passwordInput.value));

// Form submission handling
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateName(nameInput.value);
    const isEmailValid = validateEmail(emailInput.value);
    const isPasswordValid = validatePassword(passwordInput.value);

    if (isNameValid && isEmailValid && isPasswordValid) {
        formSuccess.textContent = 'Form submitted successfully!';
        form.reset();
        setTimeout(() => {
            formSuccess.textContent = '';
        }, 3000);
    }
});