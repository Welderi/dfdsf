document.addEventListener('DOMContentLoaded', function() {
    function updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleDateString('cs-CZ') + ' ' + now.toLocaleTimeString('cs-CZ');
        document.getElementById('datetime').textContent = dateTimeString;
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    const title = document.querySelector('.animated-title');
    const text = title.textContent;
    title.textContent = '';
    const letters = text.split('').map(char => {
        const span = document.createElement('span');
        span.textContent = char;
        return span;
    });
    letters.forEach((span, index) => {
        span.style.animationDelay = `${index * 0.1}s`;
        title.appendChild(span);
    });
});
