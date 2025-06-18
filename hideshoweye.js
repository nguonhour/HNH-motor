// visible eye icon to show/hide password input field of signin form
const passwordinput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const eyeicon = document.getElementById("eyeIcon");

togglePassword.addEventListener("click",function(){
    const type = passwordinput.getAttribute("type") === "password" ? "text": "password";
    passwordinput.setAttribute("type", type);

    if (type === "text") {
        eyeicon.innerHTML = `
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>

      `;
        
    } else {
        eyeicon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      `;
    }
})


// visible eye icon to show/hide password input field of signup form
const passwordenter = document.getElementById("password-create");
const togglePasswordcreate = document.getElementById("togglePassword-create");
const eyeiconcreate = document.getElementById("eyeIcon-create");

togglePasswordcreate.addEventListener("click",function(){
    const type = passwordenter.getAttribute("type") === "password" ? "text": "password";
    passwordenter.setAttribute("type", type);

    if (type === "text") {
        eyeiconcreate.innerHTML = `
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
      `;
        
    } else {
        eyeiconcreate.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      `;
    }
})


// visible eye icon to show/hide password confirm input field of signup form
const passwordentercomfire = document.getElementById("confirm");
const togglePasswordcomfire = document.getElementById("togglePassword-confirm");
const eyeiconcomfirm = document.getElementById("eyeIcon-confirm");

togglePasswordcomfire.addEventListener("click",function(){
    const type = passwordentercomfire.getAttribute("type") === "password" ? "text": "password";
    passwordentercomfire.setAttribute("type", type);

    if (type === "text") {
        eyeiconcomfirm.innerHTML = `
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
      `;
        
    } else {
        eyeiconcomfirm.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      `;
    }
})