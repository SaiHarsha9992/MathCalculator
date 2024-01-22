//click on symbols in calc

$(".clear").click(function(){
    $(".clear").addClass("pressed");
    $(".input").val("");
    setTimeout(function(){
        $(".clear").removeClass("pressed");
    },300)
});
$(".clearentry").click(function(){
    $(".clearentry").addClass("pressed");
    $(".input").val("");
    setTimeout(function(){
        $(".clearentry").removeClass("pressed");
    },300)
});
$(".modulo").click(function(){
    $(".modulo").addClass("pressed");
    var s = $(".input").val();
    var st = s+"%";
    $(".input").val(st);
    setTimeout(function(){
        $(".modulo").removeClass("pressed");
    },300)
});
$(".divided").click(function(){
    $(".divided").addClass("pressed");
    var s = $(".input").val();
    var st = s+"/";
    $(".input").val(st);
    setTimeout(function(){
        $(".divided").removeClass("pressed");
    },300)
});
$(".multi").click(function(){
    $(".multi").addClass("pressed");
    var s = $(".input").val();
    var st = s+"x";
    $(".input").val(st);
    setTimeout(function(){
        $(".multi").removeClass("pressed");
    },300)
});
$(".add").click(function(){
    $(".add").addClass("pressed");
    var s = $(".input").val();
    var st = s+"+";
    $(".input").val(st);
    setTimeout(function(){
        $(".add").removeClass("pressed");
    },300)
});
$(".subtract").click(function(){
    $(".subtract").addClass("pressed");
    var s = $(".input").val();
    var st = s+"-";
    $(".input").val(st);
    setTimeout(function(){
        $(".subtract").removeClass("pressed");
    },300)
});
$(".delete").click(function(){
    var s = $(".input").val();
    var st = s.slice(0,-1);
    $(".input").val(st);
    $(".delete").addClass("pressed");
    setTimeout(function(){
        $(".delete").removeClass("pressed");
    },300)
});
$(".divided").click(function(){
    $(".divided").addClass("pressed");
    var s = $(".input").val();
    var st = s+"/";
    $(".input").val(st);
    setTimeout(function(){
        $(".divided").removeClass("pressed");
    },300)
});





//click on numbers in calc
$(".nine").click(function(){
    $(".nine").addClass("pressed");
    var s = $(".input").val();
    var st = s+"9";
    $(".input").val(st);
    setTimeout(function(){
        $(".nine").removeClass("pressed");
    },300)
});
$(".eight").click(function(){
    $(".eight").addClass("pressed");
    var s = $(".input").val();
    var st = s+"8";
    $(".input").val(st);
    setTimeout(function(){
        $(".eight").removeClass("pressed");
    },300)
});
$(".seven").click(function(){
    $(".seven").addClass("pressed");
    var s = $(".input").val();
    var st = s+"7";
    $(".input").val(st);
    setTimeout(function(){
        $(".seven").removeClass("pressed");
    },300)
});
$(".six").click(function(){
    $(".six").addClass("pressed");
    var s = $(".input").val();
    var st = s+"6";
    $(".input").val(st);
    setTimeout(function(){
        $(".six").removeClass("pressed");
    },300)
});
$(".five").click(function(){
    $(".five").addClass("pressed");
    var s = $(".input").val();
    var st = s+"5";
    $(".input").val(st);
    setTimeout(function(){
        $(".five").removeClass("pressed");
    },300)
});
$(".four").click(function(){
    $(".four").addClass("pressed");
    var s = $(".input").val();
    var st = s+"4";
    $(".input").val(st);
    setTimeout(function(){
        $(".four").removeClass("pressed");
    },300)
});
$(".three").click(function(){
    $(".three").addClass("pressed");
    var s = $(".input").val();
    var st = s+"3";
    $(".input").val(st);
    setTimeout(function(){
        $(".three").removeClass("pressed");
    },300)
});
$(".two").click(function(){
    $(".two").addClass("pressed");
    var s = $(".input").val();
    var st = s+"2";
    $(".input").val(st);
    setTimeout(function(){
        $(".two").removeClass("pressed");
    },300)
});
$(".one").click(function(){
    $(".one").addClass("pressed");
    var s = $(".input").val();
    var st = s+"1";
    $(".input").val(st);
    setTimeout(function(){
        $(".one").removeClass("pressed");
    },300)
});
$(".zero").click(function(){
    $(".zero").addClass("pressed");
    var s = $(".input").val();
    var st = s+"0";
    $(".input").val(st);
    setTimeout(function(){
        $(".zero").removeClass("pressed");
    },300)
});
$(".doublezero").click(function(){
    $(".doublezero").addClass("pressed");
    var s = $(".input").val();
    var st = s+"00";
    $(".input").val(st);
    setTimeout(function(){
        $(".doublezero").removeClass("pressed");
    },300)
});
$(".fullstop").click(function(){
    $(".fullstop").addClass("pressed");
    var s = $(".input").val();
    var st = s+".";
    $(".input").val(st);
    setTimeout(function(){
        $(".fullstop").removeClass("pressed");
    },300)
});


//if any alphabets are pressed
$(document).on('keypress',function(event){
    var cod = event.keyCode || event.which;
    if(cod>=65&&cod<=90 || cod>=97&&cod<=122){
        event.preventDefault();
    }
});


$(".result").click(function(){
    $(".result").addClass("pressed");
    var n = $(".input").val();
    var result = eval(n);
    $(".input").val(result);
    setTimeout(function(){
        $(".result").removeClass("pressed");
    },300)
});
$(document).on('keyup', function(event) {
    var codee = event.keyCode || event.which;

    // Check if the pressed key is Enter (key code 13) and the focused element is the input field
    if (codee === 13 && $(document.activeElement).is(".input")) {
        var n = $(".input").val();
        var result = eval(n);
        $(".input").val(result);
    }
});