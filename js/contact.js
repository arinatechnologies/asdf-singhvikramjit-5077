document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('customForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Basic form validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      
      if (!name || !email) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Form submission handling would go here
      // This is just a placeholder for actual form handler
      console.log('Form submitted:', {
        name,
        email,
        phone: document.getElementById('phone').value.trim(),
        service: document.getElementById('service').value,
        message: document.getElementById('message').value.trim()
      });
      
      // Reset form after submission
      contactForm.reset();
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');
    });
  }
});