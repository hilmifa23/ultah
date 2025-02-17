function surpriseMessage() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.style.display = 'block';

    // Create confetti
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiPiece.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;

        confettiContainer.appendChild(confettiPiece);
    }

    setTimeout(() => {
        confettiContainer.style.display = 'none';
    }, 5000);
}

function getRandomColor() {
    const colors = ['#ff4081', '#f44336', '#4caf50', '#2196f3', '#ffeb3b', '#9c27b0'];
    return colors[Math.floor(Math.random() * colors.length)];
}
