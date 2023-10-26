function rotateCursor(event) {
    // Fetch the x- and y-position
    let x = event.clientX;
    let y = event.clientY;

    // Modifies the x- and y-position to fit the svg-icon
    let newX = x - 6;
    let newY = y - 3;

    // To simplify the code further down
    let cursorID = document.getElementById("cursor");

    // Storing window width and height in variables
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;    

    // Calculate the center of window (with offsets)
    let centerX = (winWidth / 2) - 12.5;
    let centerY = (winHeight / 2) - 12.5;

    // Offset for the icon that has a slight angle to it as default
    let offset = 25;
    
    // Calculate the angle
    let radians = Math.atan2(newX - centerX, newY - centerY);
    let degrees = (radians * (180 / Math.PI) * -1) + 180 + offset;

    // Rotating the icon
    cursorID.style.transform = 'rotate('+degrees+'deg)';
    
    // Moves the svg-icon
    cursorID.style.left = newX + "px";
    cursorID.style.top = newY + "px";

    // Change the color of the svg-icon depending on left or right side of the window
    if(newX < centerX) {
        cursorID.style.fill = "var(--secondary-color)";
    }
    else {
        cursorID.style.fill = "var(--primary-color)";
    }
}
