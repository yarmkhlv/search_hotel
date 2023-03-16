import { FormEvent, useState } from 'react';
import { validateLogin, validatePass } from '../helpers/validates';

import '../styles/authorization.css';

export function Authorization() {
  const [inputLogin, setInputLogin] = useState('');
  const [inputPass, setInputPass] = useState('');
  const [validErrLogin, setValidErrLogin] = useState(false);
  const [validErrPass, setValidErrPass] = useState(false);

  function validateForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validateLogin(inputLogin)) {
      setValidErrLogin(true);
    } else {
      setValidErrLogin(false);
    }
    if (validatePass(inputPass)) {
      setValidErrPass(true);
    } else {
      setValidErrPass(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-blur-effect">
        <div className="auth-wrapper">
          <div className="auth">
            <div className="auth__text">Simple Hotel Check</div>
            <form
              className="auth__form"
              onSubmit={(event) => {
                validateForm(event);
              }}
              noValidate
            >
              <div className="auth__form__section">
                <label
                  htmlFor="my-login"
                  className="auth__form__section__label"
                >
                  Логин
                </label>
                <input
                  id="my-login"
                  className="auth__form__section__input"
                  type="email"
                  onInput={(event) => {
                    setInputLogin(event.currentTarget.value);
                  }}
                />
                <div
                  className={`${
                    validErrLogin ? '' : 'none'
                  } auth__form__section__error error`}
                >
                  Неверно введена почта
                </div>
              </div>

              <div className="auth__form__section">
                <label htmlFor="my-pass" className="auth__form__section__label">
                  Пароль
                </label>
                <input
                  id="my-pass"
                  className="auth__form__section__input"
                  type="password"
                  onInput={(event) => {
                    setInputPass(event.currentTarget.value);
                  }}
                />
                <div
                  className={`${
                    validErrPass ? '' : 'none'
                  } auth__form__section__error error`}
                >
                  Неверно введен пароль
                </div>
              </div>

              <button
                className="styled-btn btn-size-for-form-entry"
                type="submit"
              >
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
