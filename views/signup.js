$(function(){

    $("#fname_error_message").hide();
    $("#sname_error_message").hide();
    $("#password_error_message").hide();
    $("#confirm_password_error_message").hide();
    $("#email_error_message").hide();

    var error_fname=false;
    var error_sname=false;
    var error_password=false;
    var error_confirm_password=false;
    var error_email=false;
    
    $("#form_fname").focusout(function(){
        check_fname();
    });
    $("#form_password").focusout(function(){
        check_password();
    });
    $("#form_confirm_password").focusout(function(){
        check_confirm_password();
    });
    $("#form_email").focusout(function(){
        check_email();
    });

    function check_fname(){
        var pattern = /^[a-zA-Z]*$/;
        var fname=$("#form_fname").val()
        if(pattern.test(fname) && fname!==''){
            $("#fname_error_message").hide();
            $("#form_fname").css("border-bottom","2px solid #34F458");
        }else{
            $("#fname_error_message").html("Should contain only characters");
            $("#fname_error_message").show();
            $("#form_fname").css("border-bottom","2px solid #F90A0A");
            error_fname=true;
        }
    }

    function check_password(){
        var password_length=$("#form_password").val().length;
        if(password_length < 9){
            $("#password_error_message").html("Atleast 9 characters");
            $("#password_error_message").show();
            $("#form_password").css("border-bottom","2px solid #F90A0A");
            error_password=true;
        }else{
            $("#password_error_message").hide();
            $("#form_password").css("border-bottom","2px solid #34F458");
        }
    }

    function check_confirm_password(){
        var password=$("#form_password").val();
        var confirm_password=$("#form_confirm_password").val();
        if(password!==confirm_password){
            $("#confirm_password_error_message").html("Passwords didn't matched");
            $("#confirm_password_error_message").show();
            $("#form_confirm_password").css("border-bottom","2px solid #F90A0A");
            error_confirm_password=true;
        }else{
            $("#confirm_password_error_message").hide();
            $("#form_confirm_password").css("border-bottom","2px solid #34F458");
        }
    }

    function check_email(){
        var pattern=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email=$("#form_email").val();
        if(pattern.test(email) && email!==''){
            $("#email_error_message").hide();
            $("#form_email").css("border-bottom","2px solid #34f458");
        }else{
            $("#email_error_message").html("Invalid Email");
            $("#email_error_message").show();
            $("#form_email").css("border-bottom","2px solid #F90A0A");
            error_email=true;
        }
    }

    $("#signup-form").on("submit", function(event){
        event.preventDefault();
        error_fname=false;
        error_password=false;
        error_confirm_password=false;
        error_email=false;

        check_fname();
        check_password();
        check_confirm_password();
        check_email();

        if(error_fname===false && error_email===false && error_password===false && error_confirm_password===false){
            alert("Registration Successful");
            return true;
        }else{
            alert("Please fill the form correctly");
            return false;
        }
    });
});