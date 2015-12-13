$(document).ready(function () {
    var color1;
    var color2;
    var number1 = Math.floor((Math.random() * 10));
    var number2 = Math.floor((Math.random() * 10));
    while (number1 === number2) {
        number2 = Math.floor((Math.random() * 10));
    }
    var colors = ['indigo', 'pink', 'cyan', 'teal', 'green', 'lime', 'yellow', 'amber', 'orange', 'red'];
    var color1 = colors[number1];
    console.log(color1);
    var color2 = colors[number2];
    console.log(color2);
    $('#materialcolors').attr('href', 'https://storage.googleapis.com/code.getmdl.io/1.0.6/material.' + color1 + '-' + color2 + '.min.css');
});

