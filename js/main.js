function changeDisplay(){
    var loginLink = document.getElementById("login-link");
    var loginForm = document.getElementById("login-form-item");
    loginLink.style.display = "none";
    loginForm.style.display = "block";
    
}
$('.tabs').on('click', 'li a', function(e){
    e.preventDefault();
    var $tab = $(this),
    href = $tab.attr('href');
    $('.active').removeClass('active');
    $tab.addClass('active');
    $('.show')
        .removeClass('show')
        .addClass('hide')
        .hide();
    
    $(href)
        .removeClass('hide')
        .addClass('show')
        .hide()
        .fadeIn(550);
});

function login(){
    var login_email = document.getElementById("login-email");
    var login_pass = document.getElementById("login-pass");
    email = login_email.value;
    login = login_pass.value;
    if (email == "123456@mail.ru" && login == "123456"){
        window.location.href = "player-page.html";
    }
}