function showAlert(isStudent) {
    var win1,win2;
    if (isStudent) {
        alert("Welcome to Student!");
        win1=window.open("captcha_authitication.html");
    } else {
        alert("Welcome to Teacher!");
        win2 = window.open("process_teacher.html");
    }
    
}  