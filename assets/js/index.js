$(document).ready(function () {
    // For Input Text
    $('input[type=text]').on('keyup', (e) => {
        validatetext(e, "text")
    })
    // $('input[type=email]').on('keyup', (e) => {
    //     validemail(e, "text")
    // })
    $('#password').on('keyup', (e) => {
        validpassword(e, "text")
    })
    $('#repassword').on('keyup', (e) => {
        checkpassword(e, "text")
    })
})



const onsubmit = (e) => {
    e.preventDefault()

    const namepattern = /^[A-Za-z]+$/
    const emailpattern = pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const forms = document.forms['registration']

    let isvalid = true


    // First Name Validation
    const firstname = forms['firstname'].value

    if (firstname.length === 0) {
        document.querySelector('#firstname-error').innerHTML = 'First Name Requried'
        isvalid = false
        return
    }
    else if (!namepattern.test(firstname)) {
        document.querySelector('#firstname-error').innerHTML = 'No Special Characters/Numbers'
        isvalid = false
    }
    else
        document.querySelector('#firstname-error').innerHTML = ''


    // Last Name Validation
    const lastname = forms['lastname'].value

    if (lastname.length === 0) {
        document.querySelector('#lastname-error').innerHTML = 'Last Name Requried'
        isvalid = false
        return
    }
    else if (!namepattern.test(lastname)) {
        document.querySelector('#lastname-error').innerHTML = 'No Special Characters/Numbers'
        isvalid = false
    }
    else
        document.querySelector('#lastname-error').innerHTML = ''


    // Email Validation
    const email = forms['email'].value
    if (email.length === 0) {
        document.querySelector(`#email-error`).innerHTML = `Email Required`
        isvalid = false
        return
    }
    else if (!emailpattern.test(email) && email.length > 0) {
        document.querySelector(`#email-error`).innerHTML = 'Enter Valid Email ID'
        isvalid = false
    }

    else
        document.querySelector(`#email-error`).innerHTML = ''


    // Password Validation
    const password = forms['password'].value
    if (password.length === 0) {
        document.querySelector(`#password-error`).innerHTML = `Password Required`
        isvalid = false
        return
    }
    else if (password.length < 8 || password.length > 16) {
        document.querySelector(`#password-error`).innerHTML = 'Password Must have between 8 to  Characters'
        isvalid = false
    }

    else
        document.querySelector(`#password-error`).innerHTML = ''

    // Confirm Password Validation
    const repassword = forms['repassword'].value
    if (password.length === 0) {
        document.querySelector(`#password-error`).innerHTML = `Password Required`
        isvalid = false
        return
    }
    else if (password !== repassword && value.length > 0) {
        document.querySelector(`#repassword-error`).innerHTML = " Password doesn't match."
        isvalid = false
    }

    else
        document.querySelector(`#repassword-error`).innerHTML = ''

    if (isvalid) {
        alert('Submitted')
        document.querySelector("#registration").reset();
        return
    }

    return

}





const validatetext = (e) => {


    const value = e.target.value
    const id = e.target.id
    const name = e.target.name
    let namevalue = 'Name', errormsg = 'No Special Character/Number'

    let pattern = /^[A-Za-z]+$/g // check if special character/number contains
    document.querySelector(`#${id}-error`).innerHTML = ""

    if (name === "email") {
        namevalue = 'Email'
        errormsg = 'Enter Valid Email ID'
        pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    }


    if (!pattern.test(value) && value.length > 0) {
        document.querySelector(`#${id}-error`).innerHTML = errormsg
        return
    }
    if (value.length === 0) {
        document.querySelector(`#${id}-error`).innerHTML = `${namevalue} Required`
        return
    }
}

// const validemail = (e) => {
//     const value = e.target.value
//     const id = e.target.id
//     const pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g // check if it valid email

//     document.querySelector(`#${id}-error`).innerHTML = ""

//     if (!pattern.test(value)) {
//         document.querySelector(`#${id}-error`).innerHTML = "Invalid Email"
//         return
//     }
//     if (value.length === 0) {
//         document.querySelector(`#${id}-error`).innerHTML = "Email Required"
//         return
//     }

// }

const validpassword = (e) => {
    const value = e.target.value
    const id = e.target.id

    document.querySelector(`#${id}-error`).innerHTML = ""

    if (value.length === 0) {
        document.querySelector(`#${id}-error`).innerHTML = "Password Required"
        return
    }
    if (value.length < 8 || value.length > 16) {
        document.querySelector(`#${id}-error`).innerHTML = " Password much contain between 8 to 16 Characters."
        return
    }

}

const checkpassword = (e) => {
    const value = e.target.value
    const id = e.target.id

    const originalpassword = document.querySelector('#password').value
    document.querySelector(`#${id}-error`).innerHTML = ""

    if (originalpassword !== value && value.length > 0) {
        document.querySelector(`#${id}-error`).innerHTML = " Password doesn't match."
        return
    }

}


document.querySelector('#registration').addEventListener('submit', onsubmit)
