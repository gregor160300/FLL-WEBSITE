var imagenum = 1;

function changeDetected(input) {
    if (input > 85) {
        input = 85;
    }
    imagenum = input;
    $('#images').attr('src', '../images/build/Step' + imagenum + '.png');
    $('#title').html("Stap " + imagenum + " van de 85");
    $('#picnumber').val(imagenum);
}

$(document).ready(function () {
    $('#images').attr('src', '../images/build/Step' + imagenum + '.png');
    $('#title').html("Stap " + imagenum + " van de 85");

    $("#next").click(function () {
        if (imagenum <= 84) {
            var nextimg = parseInt(imagenum) + 1;
            changeDetected(nextimg);
        }
    });

    $("#prev").click(function () {
        if (imagenum >= 2) {
            var previmg = parseInt(imagenum) - 1;
            changeDetected(previmg);
        }
    });

});