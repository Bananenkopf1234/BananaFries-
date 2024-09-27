
    let hintergrundMusik = new Audio('hi.mp3')
    let gegner_left = 1000;
    let aufBoden = true
    let score = 0;
    
    hintergrundMusik.play();

    setInterval(() => {
        gegner.style.left = gegner_left +'px';
        gegner_left -= 10;
        if(gegner_left < 150 && aufBoden) {
            alert('GAME OVER!!!   Score: ' + score)
        resetScore()
        gegner_left = 1000;
        }
        if(gegner_left < 0) {
            gegner_left = 1000;
        }
    },10);
    
    window.addEventListener('click', function() {
        if (aufBoden) {
            score++; 
            spieler.style.top = '350px'; 
            aufBoden = false;
            setTimeout(() => {
                spieler.style.top = '500px';
            }, 500);
            setTimeout(() => {
            aufBoden = true;
    
            document.getElementById('score').textContent = score;
            }, 400);
        }
    });
