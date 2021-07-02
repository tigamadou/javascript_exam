// After loading the DOM, execute the processing in function()
$(document).ready(function () {
    // Logic to get the score (input value) of "Japanese, English, math, science, society" and get the total score and average score
    function score_indicate() {
        // Substitute an array of scores for "Japanese, English, math, science, and society" into the variable "subject_points".
        let subject_points = [
            Number($('#national_language').val()),
            Number($('#english').val()),
            Number($('#mathematics').val()),
            Number($('#science').val()),
            Number($('#society').val())
        ];
        // Add the score of "Japanese, English, math, science, society" to the variable "sum".
        let sum = subject_points[0];
        sum = sum + subject_points[1];
        sum = sum + subject_points[2];
        sum = sum + subject_points[3];
        sum = sum + subject_points[4];
        // Output the variable "sum" (total score) to "total score:" (id = "sum_indicate").
        $("#sum_indicate").text(sum);
        $("#average_indicate").text(sum / subject_points.length);
        // Describe the process of outputting the average score of each subject in "Average score:".
        // Hint: Let's assign the average value to the variable "average" (total number of numbers you want to average (sum) / total number)
        // Tip: Use the length method to find the total number. (length method: Method to get the length of the character string, the number of elements in the array, etc.)
    };
    // Describe the logic to acquire the average score and rank it into "A, B, C, D" from the acquired average score.
    function get_achievement() {
        let averageIndicate = $("#average_indicate").text();
        console.log(averageIndicate)
        if (averageIndicate >= 80) {
            return 'A';
        } else if (averageIndicate >= 60) {
            return 'B'
        } else if (averageIndicate >= 40) {
            return 'C'
        } else {
            return 'D'
        }

    };
    // Obtain the points of each subject and create the logic to judge "pass or fail" from the obtained points.
    function get_pass_or_failure() {
        let subject_points = [
            Number($('#national_language').val()),
            Number($('#english').val()),
            Number($('#mathematics').val()),
            Number($('#science').val()),
            Number($('#society').val())
        ];
        let number = subject_points.length;
        let judge = "Pass";   
        for(let i = 0; i < number; i += 1){
            if (subject_points[i] < 60){
                judge = "Fail";
              }
        }
        return judge;
    };
    // Create the final judge logic.
    function judgement() {
        // Assign "return value of get_achievement ()" to the variable "achievement".
        let achievement = get_achievement();
        // Substitute "return value of get_pass_or_failure ()" for variable "pass_or_failure".
        let pass_or_failure = get_pass_or_failure();
        // 「Result」(id="alert-indicate) press the button「Your grade is${achievement}です。${pass_or_failure}です。」 is the output process.
        $('#declaration').html('');
        let alertClass= 'success'
        if(pass_or_failure === 'Fail'){
            alertClass = 'danger'
        }
        $('#declaration').append(`<div id="alert-indicate" class="alert alert-${alertClass}">Your grade is ${achievement}。${pass_or_failure}。</div>`);
    };
    // This process fires "function score_indicate ()" when any of the scores in [Japanese score, English score, math score, science score, social score] is changed.
    $('#national_language, #english, #mathematics, #science, #society').change(function () {
        score_indicate();
    });
    // When you press the "Rank" (id = "evaluation") button, "get_achievement ()" is output.
    $('#btn-evaluation').click(function () {
        $("#evaluation").text(get_achievement());
    });
    // When you press the "judgment" (id = "btn-judge") button, "function et_pass_or_failure ()" is output.
    $('#btn-judge').click(function () {
        $("#judge").text(get_pass_or_failure());
    });
    // When the "final judge" (id = "btn-declaration") button is pressed, the process of "function judgment ()" is executed.
    // When the "Final Judge" button is pressed from the second time onward, the HTML element of the judge that has been displayed up to that point is deleted and a new HTML element of the judge is added.
    // Tip: Find out about the remove method.
    $('#btn-declaration').click(function () {
        judgement()
    });
});