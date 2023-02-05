import React, { BaseSyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './auth.style.css';
import { authInitialState } from './reducers/auth.reducer';
import { AuthService } from './services/auth.service';
import { messageType } from '../../shared/enums/exchange.enums';

export default function Auth() {
  const [form, setForm] = useState(authInitialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (ev: BaseSyntheticEvent) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    });

    dispatch({ type: 'SIGN_IN', payload: { [ev.target.name]: ev.target.value } });
  };

  const signIn = () => {
    //check if user send  empty form
    if (form.login === '' || form.password === '') {
      alert('Please fill all fields');
      return;
    }

    //sending data to "server"
    const res = AuthService.signIn(form);

    //if server finds our data and its valid set data to session storage (not protected method) and navigate to exchange page
    if (res.messageType == messageType.SignIn) {
      sessionStorage.setItem('userID', res.message);
      navigate('/');
    }
    //alert that data is not valid. in the future should be validators and error display in form
    else {
      alert(res.message);
    }
  };

  return (
    <div className="auth_wrapper">
      <div className="auth_container">
        <form className="auth_form">
          <span className="auth_form_title">login</span>
          <div>
            <input
              placeholder={'Login'}
              name="login"
              value={form.login}
              onChange={handleInputChange}
            />
            <input
              placeholder={'Password'}
              type="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button type="button" onClick={() => signIn()}>
              sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
