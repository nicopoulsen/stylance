document.querySelectorAll('.stylist').forEach(stylist => {
    stylist.addEventListener('mouseenter', () => {
        setTimeout(() => {
            stylist.querySelector('.info').style.display = 'block';
        }, 300); // Delay the appearance by 0.3s for smoother hover effect
    });

    stylist.addEventListener('mouseleave', () => {
        stylist.querySelector('.info').style.display = 'none';
    });
});
