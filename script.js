


let userName = localStorage.getItem("userName");

if (userName) {
    document.getElementById("loginBtn").style.display = "none";

    let name = document.getElementById("userName");
    name.style.display = "inline";
    name.textContent = userName;
}
function logout() {
    localStorage.removeItem("userName"); // حذف اسم المستخدم
    window.location.href = "about.html"; // الرجوع لصفحة تسجيل الدخول
}

