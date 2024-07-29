import { Link } from 'react-router-dom';
import style from './Erro404.module.scss';

function Erro404() {
    return (
        <div className={`container ${style.erro404}`}>
            <div className="row justify-content-center align-items-center">
                <div className="col-11 text-center mb-3">
                    <h1>404 <span>|</span> Página não encontrada!</h1>
                </div>
                <div className="col-11 text-center">
                    <Link to={"/"}>
                        <button>Ir para home</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export { Erro404 }