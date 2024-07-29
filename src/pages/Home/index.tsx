import style from "./Home.module.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

import { Search, StickyNote } from "lucide-react";

import { IMaskInput } from "react-imask";

function Home() {
    const [cnpj, setCnpj] = useState<string>('');

    function removeMask(cnpj: string): string {
        return cnpj.replace(/[^\d]/g, '');
    }

    function handleCNPJ(e: React.ChangeEvent<HTMLInputElement>) {
        setCnpj(removeMask(e.target.value))
    }

    function handlePasteCNPJ(e: React.ClipboardEvent<HTMLInputElement>) {
        const text = e.clipboardData.getData('text');
        setCnpj(removeMask(text));
    };


    return (
        <div className={`container ${style.home}`}>
            <div className="row justify-content-center align-items-center">
                <div className="col-11 col-md-7 col-xl-5 col-xxl-4">
                    <h1>Digite o CNPJ que deseja consultar</h1>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-11 col-md-5 col-xl-4 col-xxl-3 mb-2 mb-md-0">
                    <div className={style.home__input}>
                        <StickyNote size={16} />
                        <IMaskInput
                            mask="00.000.000/0000-00"
                            placeholder="Insira o CNPJ:"
                            value={cnpj}
                            onChange={handleCNPJ}
                            onPaste={handlePasteCNPJ}
                        />
                    </div>
                </div>
                <div className="col-11 col-md-2 col-xl-1">
                    <Link to={`/consulta/${cnpj}`}>
                        <button>
                            <Search size={16} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export { Home }