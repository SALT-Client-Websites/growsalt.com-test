$(document).ready(function () {
    $(".google-review").hide();
    $(".submit-feedback").hide();
    $(".survey-question1").hide();
    $(".survey-question2").hide();
    $(".survey-question3").hide();
    $(".survey-question4").hide();
    $(".survey-question5").hide();
    $(".survey-question6").hide();
    $(".survey-question7").hide();
    $(".survey-question8").hide();
    $(".survey-question9").hide();
  
    

var scores = [];

function calculateAverage() 
{
    // Reset scores array and sum variable for each calculation
    var sum = 0;
    var count = 0;
    // Get the selected value
    var feedbackOnboarding = document.querySelector('input[name="feedback-onboarding"]:checked');
    var feedbackList = document.querySelector('input[name="feedback-list"]:checked');
    var feedbackMessaging = document.querySelector('input[name="feedback-messaging"]:checked');
    var feedbackPipeline = document.querySelector('input[name="feedback-pipeline"]:checked');
    var feedbackOpportunity = document.querySelector('input[name="feedback-opportunity"]:checked');
    var feedbackReporting = document.querySelector('input[name="feedback-reporting"]:checked');
    var feedbackAccount = document.querySelector('input[name="feedback-account"]:checked');
    var feedbackOverall = document.querySelector('input[name="feedback-overall"]:checked');

    // If a value is selected, push it to the scores array and add to the sum
    if (feedbackOnboarding) {
        sum += parseInt(feedbackOnboarding.value);
        count++;
    }
    if(feedbackList){
        sum += parseInt(feedbackList.value);
        count++;
    }
    if(feedbackMessaging){
        sum += parseInt(feedbackMessaging.value);
        count++;
    }
    if(feedbackPipeline){
        sum += parseInt(feedbackPipeline.value);
        count++;
    }
    if(feedbackOpportunity){
        sum += parseInt(feedbackOpportunity.value);
        count++;
    }
    if(feedbackReporting){
        sum += parseInt(feedbackReporting.value);
        count++;
    }
    if(feedbackAccount){
        sum += parseInt(feedbackAccount.value);
        count++;
    }
    if(feedbackOverall){
        sum += parseInt(feedbackOverall.value);
        count++;
    }
    // Update the input field with the sum
   var average = count > 0 ? sum / count : 0;
  document.getElementById('score').value = parseInt(average);

    return parseInt(average);

}

    $("#take-survey-btn").on("click", function () {
        $(".take-survey-div").hide();
        $(".survey-question1").show();
    });

    $("#next-btn-1").on("click", function(){

        function validateCheckBoxAndProceed() {
            var checkboxes = document.querySelectorAll('input[name="reason[]"]:checked');
            var otherComment = document.getElementById('other-comment-1').value;

            if (checkboxes.length === 0) {
                $('#alert-no-answer1').show();
                setTimeout(function() {
                    $('#alert-no-answer1').fadeOut(); 
                }, 3000);
            } else
            {
                $(".take-survey-div").hide();
                $(".survey-question1").hide();
                $(".survey-question2").show();
            }
        }
        validateCheckBoxAndProceed();     
    });

    $("#next-btn-2").on("click", function(){

        function validateRadioButtonAndProceed(){
            var selectedOption = document.querySelector('input[name="feedback-onboarding"]:checked');
            var otherComment = document.getElementById('other-comment-onboarding').value;

            if (!selectedOption && otherComment.trim() === "") {
                $('#alert-no-answer2').show();
                setTimeout(function() {
                    $('#alert-no-answer2').fadeOut(); 
                }, 3000);
            } 
            else
            {
                $(".take-survey-div").hide();
                $(".survey-question1").hide()
                $(".survey-question2").hide();
                $(".survey-question3").show();
            }
        }
        
        validateRadioButtonAndProceed();
        calculateAverage();
    });

    $("#next-btn-3").on("click", function(){

        function validateRadioButtonAndProceed(){
            var selectedOption = document.querySelector('input[name="feedback-list"]:checked');
            var otherComment = document.getElementById('other-comment-list').value;

            if (!selectedOption && otherComment.trim() === "") {
                $('#alert-no-answer3').show();
                setTimeout(function() {
                    $('#alert-no-answer3').fadeOut(); 
                }, 3000);
            } 
            else
            {
                $(".take-survey-div").hide();
                $(".survey-question1").hide();
                $(".survey-question2").hide();
                $(".survey-question3").hide();
                $(".survey-question4").show();
            }
        }
        
        validateRadioButtonAndProceed();
        calculateAverage();
    
    });

    $("#next-btn-4").on("click", function(){


        function validateRadioButtonAndProceed(){
            var selectedOption = document.querySelector('input[name="feedback-messaging"]:checked');
            var otherComment = document.getElementById('other-comment-messaging').value;

            if (!selectedOption && otherComment.trim() === "") {
                $('#alert-no-answer4').show();
                setTimeout(function() {
                    $('#alert-no-answer4').fadeOut(); 
                }, 3000);
            } 
            else
            {
                $(".survey-question1").hide();
                $(".take-survey-div").hide();
                $(".survey-question2").hide();
                $(".survey-question3").hide();
                $(".survey-question4").hide();
                $(".survey-question5").show();
            }
        }
        
        validateRadioButtonAndProceed();
        calculateAverage();

    });
    
    $("#next-btn-5").on("click", function(){

        function validateRadioButtonAndProceed(){
            var selectedOption = document.querySelector('input[name="feedback-pipeline"]:checked');
            var otherComment = document.getElementById('other-comment-pipeline').value;

            if (!selectedOption && otherComment.trim() === "") {
                $('#alert-no-answer5').show();
                setTimeout(function() {
                    $('#alert-no-answer5').fadeOut(); 
                }, 3000);
            } 
            else
            {
                $(".take-survey-div").hide();
                $(".survey-question1").hide();
                $(".survey-question2").hide();
                $(".survey-question3").hide();
                $(".survey-question4").hide();
                $(".survey-question5").hide();
                $(".survey-question6").show();
            }
        }
        
        validateRadioButtonAndProceed();
        calculateAverage();
    
    });

    $("#next-btn-6").on("click", function(){

        function validateRadioButtonAndProceed(){
            var selectedOption = document.querySelector('input[name="feedback-opportunity"]:checked');
            var otherComment = document.getElementById('other-comment-opportunity').value;

            if (!selectedOption && otherComment.trim() === "") {
                $('#alert-no-answer6').show();
                setTimeout(function() {
                    $('#alert-no-answer6').fadeOut(); 
                }, 3000);
            } 
            else
            {
                $(".take-survey-div").hide();
                $(".survey-question1").hide();
                $(".survey-question2").hide();
                $(".survey-question3").hide();
                $(".survey-question4").hide();
                $(".survey-question5").hide();
                $(".survey-question6").hide();
                $(".survey-question7").show();
            }
        }
        
        validateRadioButtonAndProceed();
        calculateAverage();
    
    });

    $("#next-btn-7").on("click", function(){

        function validateRadioButtonAndProceed(){
            var selectedOption = document.querySelector('input[name="feedback-reporting"]:checked');
            var otherComment = document.getElementById('other-comment-reporting').value;

            if (!selectedOption && otherComment.trim() === "") {
                $('#alert-no-answer7').show();
                setTimeout(function() {
                    $('#alert-no-answer7').fadeOut(); 
                }, 3000);
            } 
            else
            {
                $(".take-survey-div").hide();
                $(".survey-question1").hide();
                $(".survey-question2").hide();
                $(".survey-question3").hide();
                $(".survey-question4").hide();
                $(".survey-question5").hide();
                $(".survey-question6").hide();
                $(".survey-question7").hide();
                $(".survey-question8").show();
            }
        }
        validateRadioButtonAndProceed();
        calculateAverage();
    
    });

    $("#next-btn-8").on("click", function(){
        function validateRadioButtonAndProceed(){
            var selectedOption = document.querySelector('input[name="feedback-account"]:checked');
            var otherComment = document.getElementById('other-comment-account').value;

            if (!selectedOption && otherComment.trim() === "") {
                $('#alert-no-answer8').show();
                setTimeout(function() {
                    $('#alert-no-answer8').fadeOut(); 
                }, 3000);
            } 
            else
            {   
                $(".take-survey-div").hide();
                $(".survey-question1").hide();
                $(".survey-question2").hide();
                $(".survey-question3").hide();
                $(".survey-question4").hide();
                $(".survey-question5").hide();
                $(".survey-question6").hide();
                $(".survey-question7").hide();
                $(".survey-question8").hide();
                $(".survey-question9").show();
            }
        }
        validateRadioButtonAndProceed();
        calculateAverage();
    
    });

    $("#next-btn-9").on("click",function(){
        function validateRadioButtonAndProceed(){
            var selectedOption = document.querySelector('input[name="feedback-overall"]:checked');
            var otherComment = document.getElementById('other-comment-overall').value;
            var finalAverage = calculateAverage();
            
            if (!selectedOption && otherComment.trim() === "") {
                $('#alert-no-answer9').show();
                setTimeout(function() {
                    $('#alert-no-answer9').fadeOut(); 
                }, 3000);
            } 
            else
            {   
                $(".take-survey-div").hide();
                $(".survey-question1").hide();
                $(".survey-question2").hide();
                $(".survey-question3").hide();
                $(".survey-question4").hide();
                $(".survey-question5").hide();
                $(".survey-question6").hide();
                $(".survey-question7").hide();
                $(".survey-question8").hide();
                $(".survey-question9").hide();

      
                if(finalAverage < 4){
                    $(".submit-feedback").show();
                }
                else{
                    $(".google-review").show();
                    // Open a New Tab
                    var googleReviewUrl = 'https://g.page/r/CXa-4TLcL7-XEB0/review';
                    window.open(googleReviewUrl, '_blank');
                }
                
            }
        }
        validateRadioButtonAndProceed();
        // calculateAverage();
        // alert()
    });
});