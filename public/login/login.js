const loginBtn = document.querySelector('#loginBtn');

function loginHandler() {
    event.preventDefault();

    const username = document.querySelector('#floatingInput').value.trim();
    const password = document.querySelector('#floatingPassword').value.trim();
    console.log('loginHandler function fired!');
    console.log(username);
    console.log(password);

 
};


loginBtn.addEventListener('click', loginHandler);