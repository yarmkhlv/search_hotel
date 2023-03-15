import '../styles/authorization.css';

export function Authorization() {
  return (
    <div className="auth-page">
      <div className="auth-blur-effect">
        <div className="auth-wrapper">
          <div className="auth">
            <div className="auth__text">Simple Hotel Check</div>
            <form className="auth__form" action="">
              <p className="auth__form__section">
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
              </p>
              <p className="auth__form__section">
                <label htmlFor="my-pass" className="auth__form__section__label">
                  Пароль
                </label>
                <input
                  id="my-pass"
                  className="auth__form__section__input"
                  type="password"
                />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
