
import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector('.feedback-form')


formEl.addEventListener('submit', onFormMail)
formEl.addEventListener('input', throttle(onTextInput, 500))

onFormTextarea()

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function onTextInput(evt) {
  formData[evt.target.name] = evt.target.value
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormMail(evt) {
  evt.preventDefault();
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {}
  }

function onFormTextarea() {
  const mailFormParse = JSON.parse(localStorage.getItem(STORAGE_KEY))
  if (mailFormParse) {
    formEl.elements.email.value = mailFormParse.email || '';
    formEl.elements.message.value = mailFormParse.message || '';
  }
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








