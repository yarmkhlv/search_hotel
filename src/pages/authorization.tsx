import '../styles/authorization.css';

export function Authorization() {
  return (
    <div className="auth-page">
      <div className="auth-blur-effect">
        <div className="auth-wrapper">
          <div className="auth">
            <div className="auth__text">Simple Hotel Check</div>
            <form className="auth__form" action="">
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
                />
              </div>

              <div className="auth__form__section">
                <label htmlFor="my-pass" className="auth__form__section__label">
                  Пароль
                </label>
                <input
                  id="my-pass"
                  className="auth__form__section__input"
                  type="password"
                />
              </div>

              <button className="styled-btn btn-size-for-form" type="submit">
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
