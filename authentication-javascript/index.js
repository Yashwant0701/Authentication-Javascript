let USERS_DB = []
const signup = () => {
     let firstName = document.getElementById('first-name').value
     let lastName = document.getElementById('last-name').value
     let email = document.getElementById('signup-email').value
     let password = document.getElementById('password').value
     let phoneNumber = document.getElementById('phone-no').value
    document.getElementById('sign-up-form').reset()


    let userdetails = {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
    }
    USERS_DB.push(userdetails)
    console.log(USERS_DB)
    console.log('sign up successful')
    changenavlinks(userdetails)
}
const signin = () => {
    let enteredemail = document.getElementById('login-email').value
    let enteredpassword = document.getElementById('login-password').value

    let reqUser = USERS_DB.find (user => user.email === enteredemail && user.password === enteredpassword)
    
   // console.log( USERS_DB.find (user => user.email === enteredemail && user.password === enteredpassword)?'access granted':'access denied')
   
    if (reqUser) {
        console.log('access granted')
        changenavlinks(reqUser)

    }
    else {
       console.log('access denied')
    }

    
}


const gotosignup = () => {
    document.getElementById('home').style.display = 'none'
    document.getElementById('SignUp').style.display = 'block'
    document.getElementById('SignIn').style.display = 'none'
    let signup_ans = document.getElementById('login-email')
    let signup_password = document.getElementById('login-password')

}
const gotoHome = () => {
    document.getElementById('SignUp').style.display = 'none'
    document.getElementById('home').style.display = 'block'
    document.getElementById('SignIn').style.display = 'none'

}
const gotosignin = () => {
    document.getElementById('home').style.display = 'none'
    document.getElementById('SignUp').style.display = 'none'
    document.getElementById('SignIn').style.display = 'block'


}
const changenavlinks=(currentuser) => {
  let{firstName,lastName}=currentuser
  document.getElementById('sign-up-navlink').style.display='none'
  document.getElementById('sign-in-navlink').style.display='none'
  
  document.getElementById('profile-navlink').style.display='block'
  document.getElementById('signout-navlink').style.display='block'
 
  document.getElementById('profile-navlink').innerText='Hi, ' +firstName+' ' +lastName
}
const signout=() =>{
    document.getElementById('profile-navlink').innerText=''

    document.getElementById('profile-navlink').style.display='none'
    document.getElementById('signout-navlink').style.display='none'

    document.getElementById('sign-up-navlink').style.display='block'
    document.getElementById('sign-in-navlink').style.display='block'
   
}