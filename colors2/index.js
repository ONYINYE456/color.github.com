function changecolors() {
    var hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    
    var hexcode = '#'; // Start with '#' for a valid hex color code

    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * hex_numbers.length);
        hexcode += hex_numbers[randomIndex];
    }

    console.log(hexcode);

    // Update the background color of the body element
    document.body.style.background = hexcode;

    // Update the content of the "hex-code" element
    document.getElementById("hex-code").innerHTML = hexcode;
}

// Call the function to generate and set the random hex color code
changecolors();
