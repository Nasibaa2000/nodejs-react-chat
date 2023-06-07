import axios from "axios"
const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post(
        'http://localhost:3001/authenticate ',
        {username:value}
        )
        // eslint-disable-next-line react/prop-types
        .then(r => props.onAuth({ ...r.data, secret:value }))
        .catch(e => console.log('errors',e))
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Привет 👋</div>
  
          <div className="form-subtitle">Введите имя</div>
  
          <div className="auth">
            <div className="auth-label">Имя</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Начать
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;