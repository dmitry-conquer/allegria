export const useFormValidator = credentials => {
  const entries = Object.values(credentials);
  let errors = 0;
  let errorMessage = "";
  if (entries.some(entry => /^$/.test(entry))) {
    errors++;
    errorMessage = "Заповніть всі поля";
    return { errors, errorMessage };
  }
  if (credentials.email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(credentials.email)) {
    errors++;
    errorMessage = "Некоректна пошта";
    return { errors, errorMessage };
  }
  if (credentials.tel && !/^(\+380\s\d{2}\s\d{3}-\d{2}-\d{2})$/.test(credentials.tel)) {
    errors++;
    errorMessage = "Некоректний номер телефону";
    return { errors, errorMessage };
  }
  if (credentials.repeatPassword && credentials.repeatPassword !== credentials.password) {
    errors++;
    errorMessage = "Паролі не співпадають";
    return { errors, errorMessage };
  }
  if (credentials.policy &&  credentials.policy === false) {
    console.log(credentials.policy);
    errors++;
    errorMessage = "Необхідно погодитися з політикою конфіденційності";
    return { errors, errorMessage };
  }
  if (credentials.password && credentials.password.length < 6) {
    errors++;
    errorMessage = "Пароль повинен містити не менше 6 символів!";
    return { errors, errorMessage };
  }
  if (credentials.password && credentials.repeatPassword && credentials.password !== credentials.repeatPassword) {
    errors++;
    errorMessage = "Паролі не співпадають!";
    return { errors, errorMessage };
  }
  return { errors, errorMessage };
};
