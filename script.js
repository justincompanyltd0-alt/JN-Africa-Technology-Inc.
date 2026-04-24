function login() {
  const email = document.getElementById('email')?.value;
  const password = document.getElementById('password')?.value;

  if(email === "admin@gmail.com" && password === "1234"){
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login");
  }
}

function logout(){
  window.location.href = "index.html";
}
