// FLL Trash Trek Score Sheet By Gregor Schram aka (gergor160300 aka DeveloperDutch)
// Contact gschram@protonmail.ch for questions

//From here...

var points = 0; // Setup points var and set it to 0, might have given error of adding something to a undefined

function addPoints(selector) { // Make a function that takes the input box/slider/radio as input
    if ($(selector).val() !== undefined) { // Then check to see if it has a defined value (if undefined do nothing)
        if (selector === "#M04neg") {
            points += parseInt($(selector).val() * -1);
        } else {
            points += parseInt($(selector).val()); // When defined make sure the value is a number and add it to points
        }
    }
}

// ... to here only runs on first script inclusion

$(document).ready(function () { // Make a function that runs on page load
    $('#reset').trigger("reset"); // When reloaded reset the #reset form
    $('#reset').change(function () { // Do everything inside this function when a change is made to the #reset form
        // Reset the points counter because counting is done over on every change in the form
        points = 0;

        //M01
        addPoints("#M01you"); // Get the value of the #M01you slider in numeric format and add it to points by passing the checkbox into the addPoints function
        var M01yousteps = parseInt($("#M01you").val() / 60);
        $('#M01yousteps').html(M01yousteps);
        addPoints("#M01other"); // Get the value of the #M01other slider in numeric format and add it to points by passing the checkbox into the addPoints function
        var M01othersteps = parseInt($("#M01other").val() / 60);
        $('#M01othersteps').html(M01othersteps);

        // M02
        addPoints("#methaan");
        var M02 = parseInt($("#methaan").val() / 40);
        $('#M02').html(M02);

        // M03
        addPoints("input[id=M03weight]:checked"); // Get the value of the M03weight mission checkbox in numeric value and add it to points by passing the checkbox into the addPoints function
        addPoints("input[id=M03rail]:checked"); // Get the value of the M03rail mission checkbox in numeric value and add it to points by passing the checkbox into the addPoints function

        //M04
        addPoints("#M04in");
        var M04insteps = parseInt($("#M04in").val() / 7);
        $('#M04insteps').html(M04insteps);
        addPoints("#M04uit");
        var M04uitsteps = parseInt($("#M04uit").val() / 6);
        $('#M04uitsteps').html(M04uitsteps);
        addPoints("#M04zwstart");
        var M04blackstartsteps = parseInt($("#M04zwstart").val() / 8);
        $('#M04blackstartsteps').html(M04blackstartsteps);
        addPoints("#M04zwcont");
        var M04blackcontsteps = parseInt($("#M04zwcont").val() / 3);
        $('#M04blackcontsteps').html(M04blackcontsteps);
        addPoints("#M04neg");
        var M04negsteps = parseInt($("#M04neg").val() / 8);
        $('#M04negsteps').html(M04negsteps);

        // M05
        addPoints("input[id=M05]:checked"); // Get the value of the M05 mission checkbox in numeric value and add it to points by passing the checkbox into the addPoints function

        // M06
        addPoints("input[name=M06]:checked"); // Get the value of the current checked M06 mission state in numeric value and add it to points by passing the radio into the addPoints function

        // M07
        var M07empty = $("input[id=M07empty]:checked").val(); // Check if plastic bags are removed returns a boolean
        var M07chicken = $("input[id=M07chicken]:checked").val(); // Get the value of the chicken in small circle checkbox also returns a boolean
        var M07animals = parseInt($("#animals").val()); // Get the value of the #animals slider in numeric format
        addPoints("#plastic"); // Get the value of the #plastic slider in numeric format and add it to points by passing the checkbox into the addPoints function
        if (parseInt($("#plastic").val()) === 60) {
            $('input[id=M07empty]').attr('checked', true);
        } // If you have 2 plastic bags in your Safety it is impossible to have one in a cricle
        if (M07empty !== undefined) { // If the circles are clear of plastic (so M07empty is true and not undefined)...
            if (M07chicken !== undefined) { // and if the chicken checkbox is checked (and not undefined)...
                points += 35; // then add 35 points for the chicken...
            }
            points += M07animals; // and always add the amount of animals fully inside circles
        }
        var M07plasticsteps = parseInt($("#plastic").val() / 30);
        $('#M07plasticsteps').html(M07plasticsteps);
        var M07animalsteps = parseInt($("#animals").val() / 20);
        $('#M07animalsteps').html(M07animalsteps);

        // M08
        addPoints("input[name=M08]:checked"); // Get the value of the current checked M08 mission state in numeric value and add it to points by passing the checkbox into the addPoints function

        // M09
        addPoints("input[id=M09]:checked"); // Get the value of the M09 mission checkbox in numeric value and add it to points by passing the checkbox into the addPoints function

        // M10
        addPoints("input[id=M10]:checked"); // Get the value of the M10 mission checkbox in numeric value and add it to points by passing the checkbox into the addPoints function

        //M11
        addPoints("#aankoop"); // Get the value of the #aankoop slider in numeric format and add it to points by passing the checkbox into the addPoints function
        var M11steps = parseInt($("#aankoop").val() / 40);
        $('#M11steps').html(M11steps);

        // M12
        addPoints("input[id=M12]:checked"); // Get the value of the M12 mission checkbox in numeric value and add it to points by passing the checkbox into the addPoints function

        // Total
        $('#totalscore').html(points + " punten"); // Add the points variable to the #totalscore inside html and add the word points
    });
});
