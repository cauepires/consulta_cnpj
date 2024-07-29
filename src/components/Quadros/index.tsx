import style from './Quadros.module.scss';

type QuadroEmpresaProps = {
    nome?: string,
    razao_social?: string,
    abertura?: string,
    situacao?: string,
    atividade?: string,
    endereco?: string,
    telefone?: string,
    email?: string | null,
}

function QuadroEmpresa( {nome, razao_social, abertura, situacao, atividade, endereco, telefone, email}: QuadroEmpresaProps ) {
    return (
        <div className={style.quadro}>
            <ul>
                <li>
                    <h3>Nome:</h3>
                    {nome ? <p>{nome}</p> : <p className={style.quadro__naoInformado}>Nome não informado</p>}
                </li>
                <li>
                    <h3>Razão Social:</h3>
                    {razao_social ? <p>{razao_social}</p> : <p className={style.quadro__naoInformado}>Razão social não informada</p>}
                </li>
                <li>
                    <h3>Data de Abertura:</h3>
                    {abertura ? <p>{abertura}</p> : <p className={style.quadro__naoInformado}>Data de abertura não informada</p>}
                </li>
                <li>
                    <h3>Situação:</h3>
                    {situacao ? <p>{situacao}</p> : <p className={style.quadro__naoInformado}>Situação não informada</p>}
                </li>
                <li>
                    <h3>Atividade Principal:</h3>
                    {atividade ? <p>{atividade}</p> : <p className={style.quadro__naoInformado}>Atividade Principal não informada</p>}
                </li>
                <li>
                    <h3>Endereço:</h3>
                    {endereco ? <p>{endereco}</p> : <p className={style.quadro__naoInformado}>Endereço não informado</p>}
                </li>
                <li>
                    <h3>Telefone:</h3>
                    {telefone ? <p>{telefone}</p> : <p className={style.quadro__naoInformado}>Telefone não informado</p>}
                </li>
                <li>
                    <h3>E-mail:</h3>
                    {email ? <p>{email}</p> : <p className={style.quadro__naoInformado}>E-mail não informado</p>}
                </li>
            </ul>
        </div>
    )
}

type QuadroSocioProps = {
    nome?: string,
    faixa_etaria?: string,
    qualificacao_socio?: string,
    entrada_sociedade?: string,
}

function QuadroSocio( { nome, faixa_etaria, qualificacao_socio, entrada_sociedade }: QuadroSocioProps ) {
    return (
        <div className={style.quadro}>
            <ul>
                <li>
                    <h3>Nome:</h3>
                    {nome ? <p>{nome}</p> : <p className={style.quadro__naoInformado}>Não informado</p>}
                </li>
                <li>
                    <h3>Faixa Etária:</h3>
                    {faixa_etaria ? <p>{faixa_etaria}</p> : <p className={style.quadro__naoInformado}>Não informado</p>}
                </li>
                <li>
                    <h3>Qualificação do Sócio:</h3>
                    {qualificacao_socio ? <p>{qualificacao_socio}</p> : <p className={style.quadro__naoInformado}>Não informado</p>}
                </li>
                <li>
                    <h3>Data de Entrada na Sociedade:</h3>
                    {entrada_sociedade ? <p>{entrada_sociedade}</p> : <p className={style.quadro__naoInformado}>Não informado</p>}
                </li>
            </ul>
        </div>
    )
}

export { QuadroEmpresa, QuadroSocio }