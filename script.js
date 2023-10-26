function showCoords(event) {
    // Får ut X- och Y-positionen
    let x = event.clientX;
    let y = event.clientY;

    // Modifierar X- och Y-positionen för att passa ikonen
    let newX = x - 6;
    let newY = y - 3;

    // För att underlätta koden längre ned
    let cursorID = document.getElementById("cursor");

    // Lagrar bredden på fönstret i variabler
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;    

    // Räknar ut mitten av skärmen
    let centerX = winWidth / 2 - 12;
    let centerY = winHeight / 2 - 10;

    // Räknar ut vinkeln den ska roteras
    let radians = Math.atan2(newX - centerX, newY - centerY);
    let degrees = (radians * (180 / Math.PI) * -1) + 180 + 25;
    cursorID.style.transform = 'rotate('+degrees+'deg)';
    
    // Flyttar ikonen
    cursorID.style.left = newX + "px";
    cursorID.style.top = newY + "px";
    if(newX < centerX) {
        cursorID.style.fill = "var(--secondary-color)";
    }
    else {
        cursorID.style.fill = "var(--primary-color)";
    }
}
