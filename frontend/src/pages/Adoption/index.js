import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/Logo.svg'

import './styles.css';

export default function Chat() {
  return (
    <div className="adoption-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Pet Help" />
          <h1>Ficha Cadastral</h1>
          <p>Antes de responder as perguntas ao lado, verifique se os seus dados cadastrais estão atualizados, pois entraremos em contato através do E-mail ou WhatsApp informados em seu cadastro.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#FD764C" />
            &nbsp; Voltar
          </Link>
        </section>

        <form>
          <p>Possui outros animais em casa?</p>
          <input type="number" placeholder="0" style={{ width: 80 }} />
          <p>Sua casa possui telas ou não possui acesso direto do animal à rua?</p>
          <input type="text" />
          <p>Possui crianças menores de 10 anos em casa?</p>
          <input type="text" />
          <p>Está ciente que um animal vive em média 15 anos e que este será de sua total responsabilidade por esse tempo?</p>
          <input type="text" />



          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}