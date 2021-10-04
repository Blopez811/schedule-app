const loginBtn = document.querySelector('#loginBtn');

async function loginHandler() {
    event.preventDefault();

    const username = document.querySelector('#floatingInput').value.trim();
    const password = document.querySelector('#floatingPassword').value.trim();
    
    if(username && password) {
        const response = await fetch('/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/calendar');
        } else {
            alert(response.statusText);
        }
    }

 
};


loginBtn.addEventListener('click', loginHandler);