const containerNL =document.getElementById('container')
const leftNL = document.getElementById('left')
const rightNL = document.getElementById('right')

const userEmailNL = document.getElementById('user_email')
const invalidEmailNL = document.getElementById('invalid_email')
const emailInput = document.getElementById('email')
const submitBtnNL = document.getElementById('submit_btn')


const confirmedMessageNL = document.getElementById('confirmed_message')
const dismissMessageNL = document.getElementById('dismiss_message')





function formSuccess() {
    confirmedMessageNL.classList.add('active')
    containerNL.classList.add('success')
    leftNL.style.display = 'none'
    rightNL.style.display = 'none'
}

function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}



submitBtnNL.addEventListener('click', (e) => {
    e.preventDefault()
    const email = emailInput.value.trim()

    if(validateEmail(email)){
        formSuccess()
        userEmailNL.innerText = email
        emailInput.value = ''

        invalidEmailNL.classList.remove('active')
        emailInput.classList.remove('active')
    } else{
        invalidEmailNL.classList.add('active')
        emailInput.classList.add('active')
    }

})


dismissMessageNL.addEventListener('click', () => {
    leftNL.style.display = 'block'
    rightNL.style.display = 'block'
    containerNL.classList.remove('success')
    confirmedMessageNL.classList.remove('active')
})