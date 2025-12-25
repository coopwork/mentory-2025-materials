
const form = document.querySelector('.sign-up');

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function handleSubmitSugnUpForm(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  if (!data.email || !data.password || !data.repeat_password) {
    return alert('Необходимо заполнить обязательные поля')
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;

  if (!emailRegex.test(data.email)) {
    return alert('Email не является валидным')
  }

  if (!passwordRegex.test(data.password)) {
    return alert('Пароль должен содержать минимум 8 символов, обладать верхним и нижним регистром а так же иметь спец символы')
  }

  if (data.password !== data.repeat_password) {
    return alert('Пароли не совпдают')
  }

  await delay(2000).then(() => {
    console.log('завершился запрос на сервер');
  })

  console.log('ФОРМА УСПЕШНО ОТПРАВЛЕНА', data);
}

form.addEventListener('submit', handleSubmitSugnUpForm);
