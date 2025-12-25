document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const successMessage = document.getElementById('successMessage');
            
            let isValid = true;
            
           
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
            
            
            if (name.length < 2) {
                document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
                isValid = false;
            }
            
            
            const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email';
                isValid = false;
            }
            
            
            if (message.length < 10) {
                document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
                isValid = false;
            }
            
            if (isValid) {
                successMessage.style.display = 'block';
                contactForm.reset();
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000);
            }
        });
    }
    
    
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        
        const VALID_EMAIL = 'admin@example.com';
        const VALID_PASSWORD = 'admin123';
       
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            const messageDiv = document.getElementById('loginMessage');
            
           
            document.querySelectorAll('#loginForm .error-message').forEach(el => el.textContent = '');
            messageDiv.textContent = '';
            messageDiv.className = 'message';
            
            let isValid = true;
            
// Validate empty fields
            if (!email) {
                document.getElementById('loginEmailError').textContent = 'Email is required';
                isValid = false;
            }
            
            if (!password) {
                document.getElementById('loginPasswordError').textContent = 'Password is required';
                isValid = false;
            }
            
            if (isValid) {
// Check credentials
                if (email === VALID_EMAIL && password === VALID_PASSWORD) {
                    messageDiv.textContent = 'Login successful! Welcome to dashboard.';
                    messageDiv.style.color = '#27ae60';
                    messageDiv.style.background = '#d4edda';
                
                    
                    
                    setTimeout(() => {
                        window.location.href = 'dashboard.html'; 
                    }, 2000);
                } else {
                    messageDiv.textContent = 'Invalid email or password.';
                    messageDiv.style.color = '#e74c3c';
                    messageDiv.style.background = '#f8d7da';
                }
            }
        });
    }
});