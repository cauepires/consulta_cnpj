import style from './Consulta.module.scss';

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Empresa } from '../../Interfaces/cnpj';

import { QuadroEmpresa, QuadroSocio } from '../../components/Quadros';
import { Loading } from '../../components/Loading';
import { CnpjError } from '../../components/CnpjError';
import { ConnectionError } from '../../components/ConnectionError';
import { NewSearch } from '../../components/NewSearch';

import { convertDate } from '../../utils/convertDate';
import { formatPhoneNumber } from '../../utils/formatPhoneNumber';
import { SubmitButton } from '../../components/SubmitButton';

function Consulta() {
    const cnpjValue: string = useLocation().pathname.slice(10)

    const [dataCnpj, setCnpjData] = useState<Empresa | null>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpjValue}`)
                const result = await response.json()
                setCnpjData(result)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        };

        fetchData()
    }, []);

    if (loading) return <Loading />
    if (!dataCnpj) return <ConnectionError />
    if (dataCnpj?.type === "bad_request") return <CnpjError />
    return (
        <form className={style.consulta}>
            <div className="container">
                <div className="row justify-content-center align-items-center align-items-lg-stretch">
                    <div className="col-11 col-lg-5 col-xl-4 d-flex flex-column justify-content-start align-items-start mb-5 mb-lg-0">
                        <h1>Dados da Empresa</h1>
                        <QuadroEmpresa
                            nome={dataCnpj.nome_fantasia}
                            razao_social={dataCnpj.razao_social}
                            abertura={convertDate(dataCnpj.data_inicio_atividade)}
                            situacao={dataCnpj.descricao_situacao_cadastral}
                            atividade={dataCnpj.cnae_fiscal_descricao}
                            endereco={`${dataCnpj.descricao_tipo_de_logradouro} ${dataCnpj.logradouro}, ${dataCnpj.numero} ${dataCnpj.bairro}, ${dataCnpj.municipio} - ${dataCnpj.uf}, ${dataCnpj.cep}`}
                            telefone={formatPhoneNumber(dataCnpj.ddd_telefone_1)}
                            email={dataCnpj.email}
                        />
                        <SubmitButton type={"desk"} />
                    </div>
                    {dataCnpj.qsa.length > 1 &&
                        <div className="col-11 offset-lg-1 col-lg-6 col-xl-5 d-flex flex-column justify-content-start align-items-start">
                            <h1>Quadro Societário</h1>
                            <div className={style.consulta__quadroSocietario}>
                                {dataCnpj.qsa.map((socio, index) => (
                                    <QuadroSocio
                                        key={index}
                                        idSocio={(index.toString())}
                                        nome={socio.nome_socio}
                                        faixa_etaria={socio.faixa_etaria}
                                        qualificacao_socio={socio.qualificacao_socio}
                                        entrada_sociedade={convertDate(socio.data_entrada_sociedade)}
                                    />
                                ))}
                            </div>
                        </div>
                    }
                    <div className="col-11 d-block d-lg-none">
                        <SubmitButton type={"mob"} />
                    </div>
                </div>
            </div>
            <NewSearch />
        </form>
    );
}

export { Consulta };