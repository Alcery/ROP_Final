'use strict';


// Form validation
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.form.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form.email.focus();
return false;
}
}

// calendar script
$('a.nextDay').click(function() { 
    $('li.current').next().addClass('current').prev().removeClass('current');
  });
    $('a.prevDay').click(function() { 
    $('li.current').prev().addClass('current').next().removeClass('current');
  });
  $('a.today').click(function(){
    $('li.current').removeClass('current');
    $('li.today').addClass('current');
  });
  $('a.expand').click(function(){
    $(this).parent().toggleClass('open');
    $(this).toggleClass('open');
  });