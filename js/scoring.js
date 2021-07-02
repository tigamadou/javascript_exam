$(document).ready(function () {
    function score_indicate() {
        let subject_points = [
            Number($('#national_language').val()),
            Number($('#english').val()),
            Number($('#mathematics').val()),
            Number($('#science').val()),
            Number($('#society').val())
        ];
        let sum = subject_points[0];
        sum = sum + subject_points[1];
        sum = sum + subject_points[2];
        sum = sum + subject_points[3];
        sum = sum + subject_points[4];
        $("#sum_indicate").text(sum);
        $("#average_indicate").text(sum / subject_points.length);
    };
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
    function judgement() {
        let achievement = get_achievement();
        let pass_or_failure = get_pass_or_failure();
        $('#declaration').html('');
        let alertClass= 'success'
        if(pass_or_failure === 'Fail'){
            alertClass = 'danger'
        }
        $('#declaration').append(`<div id="alert-indicate" class="alert alert-${alertClass}">Your grade is ${achievement}。${pass_or_failure}。</div>`);
    };
    $('#national_language, #english, #mathematics, #science, #society').change(function () {
        score_indicate();
    });
    $('#btn-evaluation').click(function () {
        $("#evaluation").text(get_achievement());
    });
    $('#btn-judge').click(function () {
        $("#judge").text(get_pass_or_failure());
    });
    $('#btn-declaration').click(function () {
        judgement()
    });
});