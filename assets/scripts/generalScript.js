function setActive(element) {
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked item
    element.classList.add('active');
}

function addPackage() {
    alert('Add Package clicked!');
    // Add your package addition logic here
}

// Add touch feedback for mobile devices
document.querySelectorAll('.nav-item, .add-package-btn').forEach(item => {
    item.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    item.addEventListener('touchend', function() {
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
});