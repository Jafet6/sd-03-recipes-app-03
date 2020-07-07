import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import './Profile.css';
import '../../App.css';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [rote, setRote] = useState('');
  useEffect(() => {
    setEmail(JSON.parse(localStorage.getItem('user')).email);
  }, []);

  const handleExit = () => {
    localStorage.clear();
    setRote('/');
  };

  if (rote !== '') return <Redirect to={`${rote}`} />;
  return (
    <div className="profile b-shadow">
      <Header title="Comidas" />
      <label htmlFor="email">E-mail</label>
      <span data-testid="profile-email">{email}</span>
      <button
        className="profile-btn"
        onClick={() => setRote('/receitas-feitas')} data-testid="profile-done-btn"
      >
        Receitas Feitas
      </button>
      <button
        className="profile-btn"
        onClick={() => setRote('/receitas-favoritas')}
        data-testid="profile-favorite-btn"
      >
        Receitas Favoritas
      </button>
      <button
        className="profile-btn"
        onClick={() => handleExit()} data-testid="profile-logout-btn"
      >
        Sair
      </button>
    </div>
  );
};

export default Profile;
