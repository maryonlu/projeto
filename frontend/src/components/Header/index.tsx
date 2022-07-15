import logo from '../../assets/img/logo.png';

import './style.css';

function header() {


    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src= {logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a href="https://www.linkedin.com/in/mariana-rocha-barbosa-7a103b241/">@devmaryonlu</a>
            </p>
        </div>
    </header>
    )
}

export default header;