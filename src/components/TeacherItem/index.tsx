import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/30873873?s=460&u=a8b45ac2c517dbfff21fbd98926780bf1e7f423c&v=4" alt="Erick Reis"/>
      <div>
        <strong>Erick Reis</strong>
        <span>Matemática</span>
      </div>
    </header>
    <p>
      Descrição
      <br/><br/>
      Detalhes da descrição
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 50,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>
  )
}

export default TeacherItem;