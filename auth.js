function signUp() {
    const signInBox = document.getElementById('signIn');
    const signUpBox = document.getElementById('signUp');
    const button = document.getElementById('btn');
    
    signInBox.style.left = '0'; 
    signUpBox.style.left = '100%'; 
    button.style.left = "0";
}

function signIn() {
    const signInBox = document.getElementById('signIn');
    const signUpBox = document.getElementById('signUp');
    const button = document.getElementById('btn');

    signInBox.style.left = '100%'; 
    signUpBox.style.left = '0'; 
    button.style.left = "50%" ;

}

