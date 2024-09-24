document.querySelectorAll('.stylist').forEach(stylist => {
    stylist.addEventListener('mouseenter', () => {
        stylist.querySelector('.info').style.display = 'block'; // Show info
    });

    stylist.addEventListener('mouseleave', () => {
        stylist.querySelector('.info').style.display = 'none'; // Hide info
    });
});
