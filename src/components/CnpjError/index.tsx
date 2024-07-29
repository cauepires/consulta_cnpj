import style from './CnpjError.module.scss';

import { Link } from 'react-router-dom';

function CnpjError() {
    return (
        <div className={`container ${style.cnpjError}`}>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>CNPJ Inválido!</h1>
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

export { CnpjError }