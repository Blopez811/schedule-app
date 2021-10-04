const loginBtn = document.querySelector('#loginBtn');

function loginHandler() {
    event.preventDefault();
 console.log('loginHandler function fired!');
 
};


loginBtn.addEventListener('click', loginHandler);