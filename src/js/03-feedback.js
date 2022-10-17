// 1. способ Репеты.

import throttle from 'lodash.throttle';

const refs = {
   email: document.querySelector('.feedback-form input'),
   message: document.querySelector('.feedback-form textarea'),
   form: document.querySelector('.feedback-form'),
}

let TextareaValue;
let EmailInputValue;
let DataObj = {};
const STORAGE_KEY = 'feedback-form-state';
let FormSavedData = localStorage.getItem(STORAGE_KEY);


refs.form.addEventListener('input', throttle(evt => {
    DataObj[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DataObj))
}, 500));

refs.form.addEventListener('submit', onSubmitBtn)


preventLossFormData(); 

function preventLossFormData() {
    if (FormSavedData) {
        let getParsedObjData = JSON.parse(FormSavedData);
        refs.email.value = getParsedObjData.email;
        refs.message.value = getParsedObjData.message;
} 
}

function onSubmitBtn(evt) {
    evt.preventDefault();
    console.log('Ура, отправили данные и очистили форму и LocalStorage !!!'); 
    evt.currentTarget.reset();
    console.log('Обьект с последними используемыми значениями из LocalStorage: ', JSON.parse(FormSavedData));
    localStorage.removeItem(STORAGE_KEY);
}



// 2. Пытался своим способом, до того как узнал способ Репеты.

// import throttle from 'lodash.throttle';

// const refs = {
//    email: document.querySelector('.feedback-form input'),
//    message: document.querySelector('.feedback-form textarea'),
//    form: document.querySelector('.feedback-form'),
// }
// let TextareaValue;
// let EmailInputValue;
// let DataObj = new Object();
// const STORAGE_KEY = 'feedback-form-state';
// let FormSavedData = localStorage.getItem(STORAGE_KEY);

// refs.email.addEventListener('input', throttle(onEmailInput, 500))
// refs.message.addEventListener('input', throttle(onTextareaInput, 500))
// refs.form.addEventListener('submit', onSubmitBtn)

// preventLossFormData(); 

// function onEmailInput(evt) {
//  EmailInputValue = evt.target.value;
//     console.log(EmailInputValue); 
//     DataObj.email = EmailInputValue, DataObj.message = TextareaValue;
//    localStorage.setItem(STORAGE_KEY, JSON.stringify(DataObj));
// }

// function onTextareaInput(evt) {
//   TextareaValue = evt.target.value;
//     console.log(TextareaValue);   
//     DataObj.email = EmailInputValue, DataObj.message = TextareaValue;
//    localStorage.setItem(STORAGE_KEY, JSON.stringify(DataObj));
// }

// function preventLossFormData() {
//     if (FormSavedData) {
//         let getParsedObjData = JSON.parse(FormSavedData);
//         // evt.currentTarget.value = FormSavedData;
//         console.log(getParsedObjData.email)
//         console.log(getParsedObjData.message)
// }
// }



// function onSubmitBtn(evt) {
//     evt.preventDefault();
//     console.log('Ура, отправили данные и очистили форму и LocalStorage !!!'); 
//     evt.currentTarget.reset();
//     console.log('Обьект с текущими значениями из LocalStorage ', JSON.parse(FormSavedData));
//     localStorage.removeItem(STORAGE_KEY);
// }








