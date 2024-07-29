import style from './ConnectionError.module.scss';

import { Link } from 'react-router-dom';

function ConnectionError() {
    return (
        <div className={`container ${style.connectionError}`}>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Erro de conexão, tente mais tarde!</h1>
                    <Link to={'/'}>
                        <button>
                            Voltar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export { ConnectionError }