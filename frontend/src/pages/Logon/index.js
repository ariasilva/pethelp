import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import petImg from '../../assets/pets.png'
import logoImg from '../../assets/Logo.svg'

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile')
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }

  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Pet Help" />

        <form onSubmit={handleLogin}>
          <div className="inputLogonGroup"><h1>Faça seu logon</h1>
            <input
              placeholder="Sua ID"
              value={id}
              onChange={e => setId(e.target.value)}
            />


            <button className="button" type="submit">Entrar</button>
          </div>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#FD764C" />
            &nbsp; Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={petImg} alt="PetImg" />
    </div>
  );
}