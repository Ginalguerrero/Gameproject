const loginHeader = document.querySelector('.login_title');
const submit = document.querySelector('#submit');
const loginSignup = document.querySelector('#loginSignup');


// ############################### Login up ###############################
const loginHandler = async () => {
    const userLogin = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (userLogin && password) {
        const response = await fetch('api/user/login', {
            method:'POST',
            body:JSON.stringify({userLogin, password}),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            swal({
                title: "Login Failed",
                text: "Wrong password or userId, please try again!",
                icon: "warning",
                dangerMode: true,
              });
        }
    }
};
// ############################### Sign up ###############################
const signupHandler = async () => {
    const userLogin = document.querySelector('#userName').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (userLogin && password) {
        const response = await fetch('api/user/signup', {
            method:'POST',
            body:JSON.stringify({userLogin, password}),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            swal({
                title: "Signup Failed",
                text: "Please make sure your password is numbers and characters and at least eight characters long.",
                icon: "warning",
                dangerMode: true,
              });
        }
    }
};

// ############################### Handles logging in or signing up ###############################

const submitHandler = (event) => {
    event.preventDefault();
    if (loginHeader.textContent === 'Login'){
        loginHandler();
    }else{
        signupHandler();
    }
}

// Changes the page from sign up to login page
const changeToSignUp = () => {
    if (loginHeader.textContent === 'Sign up') {
        loginHeader.textContent = 'Login';
        loginSignup.textContent = 'Sign up';
    } else {
        loginHeader.textContent = 'Sign up';
        loginSignup.textContent = 'Login';
    }
  };


submit.addEventListener('click', submitHandler);
loginSignup.addEventListener('click',changeToSignUp);

