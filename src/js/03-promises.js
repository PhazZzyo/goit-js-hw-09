import Notiflix from 'notiflix';

const form = document.querySelector('form');
const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');

// form.addEventListener('change', handleInput);
form.addEventListener('submit', handleSubmit);

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// function handleInput() {
//   const delay = delayInput.value;
//   const step = stepInput.value;
//   const amount = amountInput.value;

//   console.log(`1 ${delay}, 2 ${step}, 3 ${amount}`);
// }

function handleSubmit(event) {
  event.preventDefault();

  const delay = delayInput.value;
  const step = stepInput.value;
  const amount = amountInput.value;

  let counter = 0;

  while (counter < amount) {
    const delayStep = step + counter * delay;
    // createPromise(counter, delayStep);
    counter += 1;
    console.log('counter: ', counter, 'delayStep: ', delayStep);
  }
  // const {
  //   elements: { email, message },
  // } = event.currentTarget;

  // if (email.value === '' || message.value === '') {
  //   return alert('Please fill in all the fields!');
  // }

  console.log(`Email: ${email.value}, message: ${message.value}`);
  // event.currentTarget.reset();
}
