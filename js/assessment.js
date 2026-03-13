// Handle form close submit
const btnFormClose = document.getElementById('on_form_close');

btnFormClose.addEventListener('click', function() {
    const form = document.querySelector('#operational_maturity_assessement_form');
    const inputElements = form.querySelectorAll('input, select, textarea');

    // Loop through input elements and remove 'required' attribute
    inputElements.forEach(input => {
        if (['firstName', 'lastName', 'companyName', 'email'].indexOf(input.id) == -1) {
            input.removeAttribute('required');
        }
    });
})

// Button Answers
const step1Question1Answer = document.getElementById("step1-question1-answer");
const step1Question1OptionA = document.getElementById("step1-answer1-option-a");
const step1Question1OptionB = document.getElementById("step1-answer1-option-b");
const step1Question1OptionC = document.getElementById("step1-answer1-option-c");
// // Step 1 Question 1

const step1Question2Answer = document.getElementById("step1-question2-answer");
const step1Question2OptionA = document.getElementById("step1-answer2-option-a");
const step1Question2OptionB = document.getElementById("step1-answer2-option-b");
const step1Question2OptionC = document.getElementById("step1-answer2-option-c");
// Step 1 Question 2

const step1Question3Answer = document.getElementById("step1-question3-answer");
const step1Question3OptionA = document.getElementById("step1-answer3-option-a");
const step1Question3OptionB = document.getElementById("step1-answer3-option-b");
const step1Question3OptionC = document.getElementById("step1-answer3-option-c");
// Step 1 Question 3

const step1Question4Answer = document.getElementById("step1-question4-answer");
const step1Question4OptionA = document.getElementById("step1-answer4-option-a");
const step1Question4OptionB = document.getElementById("step1-answer4-option-b");
const step1Question4OptionC = document.getElementById("step1-answer4-option-c");
// Step 1 Question 4

const step1Question5Answer = document.getElementById("step1-question5-answer");
const step1Question5OptionA = document.getElementById("step1-answer5-option-a");
const step1Question5OptionB = document.getElementById("step1-answer5-option-b");
const step1Question5OptionC = document.getElementById("step1-answer5-option-c");
// Step 1 Question 5


const step2Question1Answer = document.getElementById("step2-question1-answer");
const step2Question1OptionA = document.getElementById("step2-answer1-option-a");
const step2Question1OptionB = document.getElementById("step2-answer1-option-b");
const step2Question1OptionC = document.getElementById("step2-answer1-option-c");
// Step 2 Question 1

const step2Question2Answer = document.getElementById("step2-question2-answer");
const step2Question2OptionA = document.getElementById("step2-answer2-option-a");
const step2Question2OptionB = document.getElementById("step2-answer2-option-b");
const step2Question2OptionC = document.getElementById("step2-answer2-option-c");
// Step 2 Question 2


const step3Question1Answer = document.getElementById("step3-question1-answer");
const step3Question1OptionA = document.getElementById("step3-answer1-option-a");
const step3Question1OptionB = document.getElementById("step3-answer1-option-b");
const step3Question1OptionC = document.getElementById("step3-answer1-option-c");
// Step 3 Question 1


const step3Question2Answer = document.getElementById("step3-question2-answer");
const step3Question2OptionA = document.getElementById("step3-answer2-option-a");
const step3Question2OptionB = document.getElementById("step3-answer2-option-b");
const step3Question2OptionC = document.getElementById("step3-answer2-option-c");
// Step 3 Question 2

const step3Question3Answer = document.getElementById("step3-question3-answer");
const step3Question3OptionA = document.getElementById("step3-answer3-option-a");
const step3Question3OptionB = document.getElementById("step3-answer3-option-b");
// Step 3 Question 3

// Step 3 Question 4
const step3Question4Answer = document.getElementById("step3-question4-answer");
const step3Question4OptionA = document.getElementById("step3-answer4-option-a");
const step3Question4OptionB = document.getElementById("step3-answer4-option-b");
const step3Question4OptionC = document.getElementById("step3-answer4-option-c");
const step3Question4OptionD = document.getElementById("step3-answer4-option-d");
const step3Question4OptionE = document.getElementById("step3-answer4-option-e");


// Step 3 Question 5

const step3Question5Answer = document.getElementById("step3-question5-answer");
const step3Question5OptionA = document.getElementById("step3-answer5-option-a");
const step3Question5OptionB = document.getElementById("step3-answer5-option-b");
const step3Question5OptionC = document.getElementById("step3-answer5-option-c");
// Step 3 Question 2


// Step 1 Question 1
step1Question1OptionA.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step1Question1Answer.value;
    const optionValueA = step1Question1OptionA.value;

    currentInputValue = ''; //every click to initialize the value
    // Concatenate the button value to the input field value
    const updatedValue = currentInputValue + optionValueA;
    // Set the updated value back to the input field
    step1Question1Answer.value = updatedValue;
});

step1Question1OptionB.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step1Question1Answer.value;
    const optionValueB = step1Question1OptionB.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueB;
    step1Question1Answer.value = updatedValue;
});

step1Question1OptionC.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step1Question1Answer.value;
    const optionValueC = step1Question1OptionC.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueC;
    step1Question1Answer.value = updatedValue;
});


// Step 1 Question 2
step1Question2OptionA.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step1Question2Answer.value;
    const optionValueA = step1Question2OptionA.value;

    currentInputValue = ''; //every click to initialize the value
    // Concatenate the button value to the input field value
    const updatedValue = currentInputValue + optionValueA;
    // Set the updated value back to the input field
    step1Question2Answer.value = updatedValue;
});

step1Question2OptionB.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step1Question2Answer.value;
    const optionValueB = step1Question2OptionB.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueB;
    step1Question2Answer.value = updatedValue;
});

step1Question2OptionC.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step1Question2Answer.value;
    const optionValueC = step1Question2OptionC.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueC;
    step1Question2Answer.value = updatedValue;
});

// Step 1 Question 3
step1Question3OptionA.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step1Question3Answer.value;
    const optionValueA = step1Question3OptionA.value;

    currentInputValue = ''; //every click to initialize the value
    // Concatenate the button value to the input field value
    const updatedValue = currentInputValue + optionValueA;
    // Set the updated value back to the input field
    step1Question3Answer.value = updatedValue;
});

step1Question3OptionB.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step1Question3Answer.value;
    const optionValueB = step1Question3OptionB.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueB;
    step1Question3Answer.value = updatedValue;
});

step1Question3OptionC.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step1Question3Answer.value;
    const optionValueC = step1Question3OptionC.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueC;
    step1Question3Answer.value = updatedValue;
});

// Step 1 Question 4
step1Question4OptionA.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step1Question4Answer.value;
    const optionValueA = step1Question4OptionA.value;

    currentInputValue = ''; //every click to initialize the value
    // Concatenate the button value to the input field value
    const updatedValue = currentInputValue + optionValueA;
    // Set the updated value back to the input field
    step1Question4Answer.value = updatedValue;
});

step1Question4OptionB.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step1Question4Answer.value;
    const optionValueB = step1Question4OptionB.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueB;
    step1Question4Answer.value = updatedValue;
});

step1Question4OptionC.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step1Question4Answer.value;
    const optionValueC = step1Question4OptionC.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueC;
    step1Question4Answer.value = updatedValue;
});

// Step 1 Question 5
step1Question5OptionA.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step1Question5Answer.value;
    const optionValueA = step1Question5OptionA.value;

    currentInputValue = ''; //every click to initialize the value
    // Concatenate the button value to the input field value
    const updatedValue = currentInputValue + optionValueA;
    // Set the updated value back to the input field
    step1Question5Answer.value = updatedValue;
});

step1Question5OptionB.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step1Question5Answer.value;
    const optionValueB = step1Question5OptionB.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueB;
    step1Question5Answer.value = updatedValue;
});

step1Question5OptionC.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step1Question5Answer.value;
    const optionValueC = step1Question5OptionC.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueC;
    step1Question5Answer.value = updatedValue;
});


// Step 2 Question 1
step2Question1OptionA.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step2Question1Answer.value;
    const optionValueA = step2Question1OptionA.value;

    currentInputValue = ''; //every click to initialize the value
    // Concatenate the button value to the input field value
    const updatedValue = currentInputValue + optionValueA;
    // Set the updated value back to the input field
    step2Question1Answer.value = updatedValue;
});

step2Question1OptionB.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step2Question1Answer.value;
    const optionValueB = step2Question1OptionB.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueB;
    step2Question1Answer.value = updatedValue;
});

step2Question1OptionC.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step2Question1Answer.value;
    const optionValueC = step2Question1OptionC.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueC;
    step2Question1Answer.value = updatedValue;
});


// Step 2 Question 2
step2Question2OptionA.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step2Question2Answer.value;
    const optionValueA = step2Question2OptionA.value;

    currentInputValue = ''; //every click to initialize the value
    // Concatenate the button value to the input field value
    const updatedValue = currentInputValue + optionValueA;
    // Set the updated value back to the input field
    step2Question2Answer.value = updatedValue;
});

step2Question2OptionB.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step2Question2Answer.value;
    const optionValueB = step2Question2OptionB.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueB;
    step2Question2Answer.value = updatedValue;
});

step2Question2OptionC.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step2Question2Answer.value;
    const optionValueC = step2Question2OptionC.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueC;
    step2Question2Answer.value = updatedValue;
});


// Step 3 Question 1
step3Question1OptionA.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question1Answer.value;
    const optionValueA = step3Question1OptionA.value;

    currentInputValue = ''; //every click to initialize the value
    // Concatenate the button value to the input field value
    const updatedValue = currentInputValue + optionValueA;
    // Set the updated value back to the input field
    step3Question1Answer.value = updatedValue;
});

step3Question1OptionB.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question1Answer.value;
    const optionValueB = step3Question1OptionB.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueB;
    step3Question1Answer.value = updatedValue;
});

step3Question1OptionC.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question1Answer.value;
    const optionValueC = step3Question1OptionC.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueC;
    step3Question1Answer.value = updatedValue;
});


// Step 3 Question 2
step3Question2OptionA.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question2Answer.value;
    const optionValueA = step3Question2OptionA.value;

    currentInputValue = ''; //every click to initialize the value
    // Concatenate the button value to the input field value
    const updatedValue = currentInputValue + optionValueA;
    // Set the updated value back to the input field
    step3Question2Answer.value = updatedValue;
});

step3Question2OptionB.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question2Answer.value;
    const optionValueB = step3Question2OptionB.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueB;
    step3Question2Answer.value = updatedValue;
});

step3Question2OptionC.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question2Answer.value;
    const optionValueC = step3Question2OptionC.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueC;
    step3Question2Answer.value = updatedValue;
});


// Step 3 Question 3

step3Question3OptionA.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question3Answer.value;
    const optionValueA = step3Question3OptionA.value;

    currentInputValue = ''; //every click to initialize the value
    // Concatenate the button value to the input field value
    const updatedValue = currentInputValue + optionValueA;
    // Set the updated value back to the input field
    step3Question3Answer.value = updatedValue;
});

step3Question3OptionB.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question3Answer.value;
    const optionValueB = step3Question3OptionB.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueB;
    step3Question3Answer.value = updatedValue;
});


// Step 3 Question 4
step3Question4OptionA.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question4Answer.value;
    const optionValueA = step3Question4OptionA.value;

    currentInputValue = ''; //every click to initialize the value
    // Concatenate the button value to the input field value
    const updatedValue = currentInputValue + optionValueA;
    // Set the updated value back to the input field
    step3Question4Answer.value = updatedValue;
});

step3Question4OptionB.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question4Answer.value;
    const optionValueB = step3Question4OptionB.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueB;
    step3Question4Answer.value = updatedValue;
});

step3Question4OptionC.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question4Answer.value;
    const optionValueC = step3Question4OptionC.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueC;
    step3Question4Answer.value = updatedValue;
});

step3Question4OptionD.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question4Answer.value;
    const optionValueD = step3Question4OptionD.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueD;
    step3Question4Answer.value = updatedValue;
});

step3Question4OptionE.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question4Answer.value;
    const optionValueE = step3Question4OptionE.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueE;
    step3Question4Answer.value = updatedValue;
});

// Step 3 Question 5

// Step 3 Question 1
step3Question5OptionA.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question5Answer.value;
    const optionValueA = step3Question5OptionA.value;

    currentInputValue = ''; //every click to initialize the value
    // Concatenate the button value to the input field value
    const updatedValue = currentInputValue + optionValueA;
    // Set the updated value back to the input field
    step3Question5Answer.value = updatedValue;
});

step3Question5OptionB.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question5Answer.value;
    const optionValueB = step3Question5OptionB.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueB;
    step3Question5Answer.value = updatedValue;
});

step3Question5OptionC.addEventListener("click", function() {
    // Get the value of the button and the current value of the input field
    let currentInputValue = step3Question5Answer.value;
    const optionValueC = step3Question5OptionC.value;

    currentInputValue = '';

    const updatedValue = currentInputValue + optionValueC;
    step3Question5Answer.value = updatedValue;
});

// Hide assessment steps on load
$(function() {
    $("#maturityAssessmentStep1-1").hide();
    $("#maturityAssessmentStep1-2").hide();
    $("#maturityAssessmentStep1-3").hide();
    $("#maturityAssessmentStep1-4").hide();
    $("#maturityAssessmentStep1-5").hide();
    $("#maturityAssessmentStep1-6").hide();
    $("#maturityAssessmentStep2-1").hide();
    $("#maturityAssessmentStep2-2").hide();
    $("#maturityAssessmentStep3-1").hide();
    $("#maturityAssessmentStep3-2").hide();
    $("#maturityAssessmentStep3-3").hide();
    $("#maturityAssessmentStep3-4").hide();
    $("#maturityAssessmentStep3-5").hide();
    $("#maturityAssessmentStep3-6").hide();
    $("#success-message").hide();
});

// Stepper js
const stepperDots = document.querySelectorAll('.stepper-dot');
const stepperLines = document.querySelectorAll('.stepper-line');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
var currentStep = 0;


// Initialize
updateStepDisplay();

// Function to update step display
function updateStepDisplay() {
    stepperDots.forEach((dot, index) => {
        if (index == currentStep) {
            dot.classList.add('active');
        }
    });

    stepperLines.forEach((line, index) => {
        if (index == currentStep) {
            line.classList.add('active');
        }
    });
}




//Display Step 1-1
function nextStep1Question1() {
    // Form value checker
    var form_first_name = $('#firstName').val();
    var form_last_name = $('#lastName').val();
    var form_company_name = $('#companyName').val();
    var form_email = $('#email').val();
    var form_number = $('#phoneNumber').val();

    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Reset previous validation errors
    $('#firstName, #lastName, #email, #companyName, #phoneNumber').css("border-color", "");
    $('.error-message').hide();

    if (form_first_name !== '' && form_last_name !== '' && form_company_name !== '' && form_email !== '' && form_number !== '') {
        if (emailRegex.test(form_email)) {
            $("#maturityAssessmentUserDetails").hide();
            $("#maturityAssessmentStep1-1").show();
        } else {
            $('#email').css("border-color", "red");
            $('#emailError').text("Please enter a valid email address.").show();
        }
    } else {
        if (form_first_name === '') {
            $('#firstName').css("border-color", "red");
        }
        if (form_last_name === '') {
            $('#lastName').css("border-color", "red");
        }
        if (form_email === '') {
            $('#email').css("border-color", "red");
            $('#emailError').text("Please enter an email address.").show();
        }
        if (form_company_name === '') {
            $('#companyName').css("border-color", "red");
        }
        if (form_number === '') {
            $('#phoneNumber').css("border-color", "red");
            $('#phoneNumberError').text("Please enter a phone number.").show();
        }
    }
}

//Display Step
function nextStep1Question2() {
    const stepAns = document.getElementById("step1-question1-answer");
    if (stepAns.value == '') {
        $('#alert-no-answer1').show();
    } else {
        $('#alert-no-answer1').hide();
        $("#maturityAssessmentStep1-1").hide();
        $("#maturityAssessmentStep1-2").show();
    }
}

function nextStep1Question3() {
    const stepAns = document.getElementById("step1-question2-answer");
    if (stepAns.value == '') {
        $('#alert-no-answer2').show();
    } else {
        $('#alert-no-answer2').hide();
        $("#maturityAssessmentStep1-2").hide();
        $("#maturityAssessmentStep1-3").show();
    }

}
//Display Step 4
function nextStep1Question4() {
    const stepAns = document.getElementById("step1-question3-answer");
    if (stepAns.value == '') {
        $('#alert-no-answer3').show();
    } else {
        $('#alert-no-answer3').hide();
        $("#maturityAssessmentStep1-3").hide();
        $("#maturityAssessmentStep1-4").show();
    }

}

function nextStep1Question5() {
    const stepAns = document.getElementById("step1-question4-answer");
    if (stepAns.value == '') {
        $('#alert-no-answer4').show();
    } else {
        $('#alert-no-answer5').hide();
        $("#maturityAssessmentStep1-4").hide();
        $("#maturityAssessmentStep1-5").show();
    }
}

function nextStep1Question6() {
    const stepAns = document.getElementById("step1-question5-answer");
    if (stepAns.value == '') {
        $('#alert-no-answer5').show();
    } else {
        $('#alert-no-answer5').hide();
        $("#maturityAssessmentStep1-5").hide();
        $("#maturityAssessmentStep1-6").show();
    }
}

function nextStep2Question1() {
    currentStep = 1;
    console.log(currentStep);
    updateStepDisplay();
    $("#maturityAssessmentStep1-6").hide();
    $("#maturityAssessmentStep2-1").show();
}

function nextStep2Question2() {
    const stepAns = document.getElementById("step2-question1-answer");
    if (stepAns.value == '') {
        $('#alert2-no-answer1').show();
    } else {
        $('#alert2-no-answer1').hide();
        $("#maturityAssessmentStep2-1").hide();
        $("#maturityAssessmentStep2-2").show();
    }
}

function nextStep3Question1() {
    const stepAns = document.getElementById("step2-question2-answer");
    currentStep = 2;
    console.log(currentStep);
    updateStepDisplay();
    if (stepAns.value == '') {
        $('#alert2-no-answer2').show();
    } else {
        $('#alert2-no-answer2').hide();
        $("#maturityAssessmentStep2-2").hide();
        $("#maturityAssessmentStep3-1").show();
    }

}

function nextStep3Question2() {
    const stepAns = document.getElementById("step3-question1-answer");
    if (stepAns.value == '') {
        $('#alert3-no-answer1').show();
    } else {
        $('#alert3-no-answer1').hide();
        $("#maturityAssessmentStep3-1").hide();
        $("#maturityAssessmentStep3-2").show();
    }
}

function nextStep3Question3() {
    const stepAns = document.getElementById("step3-question2-answer");
    if (stepAns.value == '') {
        $('#alert3-no-answer2').show();
    } else {
        $('#alert3-no-answer13').hide();
        $("#maturityAssessmentStep3-2").hide();
        $("#maturityAssessmentStep3-3").show();
    }
}


function nextStep3Question4() {
    const stepAns = document.getElementById("step3-question3-answer");
    if (stepAns.value == '') {
        $('#alert3-no-answer3').show();
    } else {
        $('#alert3-no-answer3').hide();
        $("#maturityAssessmentStep3-3").hide();
        $("#maturityAssessmentStep3-4").show();
    }
}

function nextStep3Question5() {
    const stepAns = document.getElementById("step3-question4-answer");
    if (stepAns.value == '') {
        $('#alert3-no-answer4').show();
    } else {
        $('#alert3-no-answer4').hide();
        $("#maturityAssessmentStep3-4").hide();
        $("#maturityAssessmentStep3-5").show();
    }
}

function nextStep3Question6() {

    const stepAns = document.getElementById("step3-question5-answer");
    if (stepAns.value == '') {
        $('#alert3-no-answer5').show();
    } else {
        $('#alert3-no-answer5').hide();
        $("#maturityAssessmentStep3-5").hide();
        $("#maturityAssessmentStep3-6").show();
    }
}


// Display Thank you message
function DisplayThankYouMessage() {
    currentStep = 3;
    console.log(currentStep);
    updateStepDisplay();
    $("#maturityAssessmentStep3-6").hide();
    $("#success-message").show();
}


//Display back to step 1
function prevAssessmentDetails() {
    $("#maturityAssessmentUserDetails").show();
    $("#maturityAssessmentStep1-1").hide();
}

function prevStep1Question1() {
    $("#maturityAssessmentStep1-1").show();
    $("#maturityAssessmentStep1-2").hide();
}

function prevStep1Question2() {
    $("#maturityAssessmentStep1-2").show();
    $("#maturityAssessmentStep1-3").hide();
}

function prevStep1Question3() {
    $("#maturityAssessmentStep1-3").show();
    $("#maturityAssessmentStep1-4").hide();
}

function prevStep1Question4() {
    $("#maturityAssessmentStep1-4").show();
    $("#maturityAssessmentStep1-5").hide();
}

function prevStep1Question5() {
    $("#maturityAssessmentStep1-5").show();
    $("#maturityAssessmentStep1-6").hide();
}

function prevStep1Question6() {
    $("#maturityAssessmentStep1-6").show();
    $("#maturityAssessmentStep2-1").hide();
}

function prevStep2Question1() {
    $("#maturityAssessmentStep2-1").show();
    $("#maturityAssessmentStep2-2").hide();
}

function prevStep2Question2() {

    $("#maturityAssessmentStep2-2").show();
    $("#maturityAssessmentStep3-1").hide();
}

function prevStep3Question1() {
    $("#maturityAssessmentStep3-1").show();
    $("#maturityAssessmentStep3-2").hide();
}

function prevStep3Question2() {
    $("#maturityAssessmentStep3-2").show();
    $("#maturityAssessmentStep3-3").hide();
}

function prevStep3Question3() {
    $("#maturityAssessmentStep3-3").show();
    $("#maturityAssessmentStep3-4").hide();
}

function prevStep3Question4() {
    $("#maturityAssessmentStep3-4").show();
    $("#maturityAssessmentStep3-5").hide();
}

function prevStep3Question5() {

    $("#maturityAssessmentStep3-5").show();
    $("#maturityAssessmentStep3-6").hide();
}

//Changing button color once clicked
var buttons = document.querySelectorAll('[id^="step1-answer"], [id^="step2-answer"], [id^="step3-answer"]');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        buttons.forEach(function(btn) {
            btn.classList.remove('changed-color');
        });

        button.classList.remove('btn-default');
        button.classList.add('changed-color');
    });
});