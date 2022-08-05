$(document).ready(function () {
    // For Input Text
    $('input[type=text]').on('keyup', (e) => {
        validatetext(e, "text")
    })
    $('input[type=email]').on('keyup', (e) => {
        validemail(e, "text")
    })
    $('#password').on('keyup', (e) => {
        validpassword(e, "text")
    })
    $('#repassword').on('keyup', (e) => {
        checkpassword(e, "text")
    })
})



const onsubmit = (e) => {
    e.preventDefault()
    alert('submitted')
    document.querySelector("#registration").reset();

}





const validatetext = (e) => {
    const value = e.target.value
    const id = e.target.id
    const pattern = /\d/g // check if number contains
    document.querySelector(`#${id}-error`).innerHTML = ""

    if (pattern.test(value)) {
        document.querySelector(`#${id}-error`).innerHTML = "Invalid Value"
        return
    }
    if (value.length === 0) {
        document.querySelector(`#${id}-error`).innerHTML = "Value Required"
        return
    }
}

const validemail = (e) => {
    const value = e.target.value
    const id = e.target.id
    const pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g // check if it valid email

    document.querySelector(`#${id}-error`).innerHTML = ""

    if (!pattern.test(value)) {
        document.querySelector(`#${id}-error`).innerHTML = "Invalid Email"
        return
    }
    if (value.length === 0) {
        document.querySelector(`#${id}-error`).innerHTML = "Value Required"
        return
    }

}

const validpassword = (e) => {
    const value = e.target.value
    const id = e.target.id

    document.querySelector(`#${id}-error`).innerHTML = ""

    if (value.length === 0) {
        document.querySelector(`#${id}-error`).innerHTML = "Value Required"
        return
    }
    if (value.length < 4 || value.length > 10) {
        document.querySelector(`#${id}-error`).innerHTML = " Password much contain between 4 to 10 Characters."
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
