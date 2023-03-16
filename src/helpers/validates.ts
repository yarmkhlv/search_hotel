function validateLogin(login: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !re.test(login);
}

function validatePass(pass: string) {
  const re = /^[A-Za-z]\w{8,20}$/;
  return !re.test(pass);
}

export { validateLogin, validatePass };
