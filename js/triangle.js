$(document).ready(function () {
    $('#form-uno').submit(function (event) {
        const one = parseInt($('input#length1').val());
        const two = parseInt($('input#length2').val());
        const three = parseInt($('input#length3').val());

         if (
            (one === 0) && (two === 0) && (three === 0) ||
            (one + two <= three) || (one + three <= two) || (three + two <= one)) {
            $('#not').show();
            $('#form-uno').hide();
            $('.head-row2').hide();
        }
        else if ((one === two && two === three) && (one > 0 && two > 0 && three > 0)) {
            $('#equilateral').show();
            $('.head-row2').hide();
            $('#form-uno').hide();
        }
        else if (
            (one > 0 && two > 0 && three > 0) && 
            (one === two) && (two === three) && (three === one) && (three + one > two|| two + three > one || one + two > three
                )){
            $('#form-uno').hide();
            $('.head-row2').hide();
            $('#isosceles').show();
        }
        else if ((one != two && two != three && one != three) &&
            (one + two > three || two + three > one || one + three > two) &&
            (one > 0 && two > 0 && three > 0)) {
            $('#form-uno').hide();
            $('.head-row2').hide();
            $('#scalene').show();
        }
      
        event.preventDefault()
    })
})