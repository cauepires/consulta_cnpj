import style from './Quadros.module.scss';

import { CustomInput } from '../CustomInput';

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
                    {nome ?  <CustomInput inputName={"empresaNome"} initialData={nome} /> : <CustomInput inputName={"empresaNome"} initialData={"DADO NÃO INFORMADO"} />}
                </li>
                <li>
                    <h3>Razão Social:</h3>
                    {razao_social ? <CustomInput inputName={"empresaRazaoSocial"} initialData={razao_social} /> : <CustomInput inputName={"empresaRazaoSocial"} initialData={"DADO NÃO INFORMADO"} />}
                </li>
                <li>
                    <h3>Data de Abertura:</h3>
                    {abertura ? <CustomInput inputName={"empresaDataAbertura"} initialData={abertura} date /> :  <CustomInput inputName={"empresaDataAbertura"} initialData={"00/00/0000"} date />}
                </li>
                <li>
                    <h3>Situação:</h3>
                    {situacao ? <CustomInput inputName={"empresaSituacao"} initialData={situacao} /> : <CustomInput inputName={"empresaSituacao"} initialData={"DADO NÃO INFORMADO"} />}
                </li>
                <li>
                    <h3>Atividade Principal:</h3>
                    {atividade ? <CustomInput inputName={"empresaAtividadePrincipal"} initialData={atividade} /> : <CustomInput inputName={"empresaAtividadePrincipal"} initialData={"DADO NÃO INFORMADO"} />}
                </li>
                <li>
                    <h3>Endereço:</h3>
                    {endereco ? <CustomInput inputName={"empresaEndereco"} initialData={endereco} /> : <CustomInput inputName={"empresaEndereco"} initialData={"DADO NÃO INFORMADO"} />}
                </li>
                <li>
                    <h3>Telefone:</h3>
                    {telefone ? <CustomInput inputName={"empresaTelefone"} initialData={telefone} /> : <CustomInput inputName={"empresaTelefone"} initialData={"DADO NÃO INFORMADO"} />}
                </li>
                <li>
                    <h3>E-mail:</h3>
                    {email ? <CustomInput inputName={"empresaEmail"} initialData={email} /> : <CustomInput inputName={"empresaEmail"} initialData={"DADO NÃO INFORMADO"} />}
                </li>
            </ul>
        </div>
    )
}

type QuadroSocioProps = {
    idSocio: string,
    nome?: string,
    faixa_etaria?: string,
    qualificacao_socio?: string,
    entrada_sociedade?: string,
}

function QuadroSocio( { idSocio, nome, faixa_etaria, qualificacao_socio, entrada_sociedade }: QuadroSocioProps ) {
    return (
        <div className={style.quadro}>
            <ul>
                <li>
                    <h3>Nome:</h3>
                    {nome ? <CustomInput inputName={`socio${idSocio}_nome`} initialData={nome} /> : <CustomInput inputName={`socio${idSocio}_nome`} initialData={"DADO NÃO INFORMADO"} />}
                </li>
                <li>
                    <h3>Faixa Etária:</h3>
                    {faixa_etaria ? <CustomInput inputName={`socio${idSocio}_faixaEtaria`} initialData={faixa_etaria} /> : <CustomInput inputName={`socio${idSocio}_faixaEtaria`} initialData={"DADO NÃO INFORMADO"} />}
                </li>
                <li>
                    <h3>Qualificação do Sócio:</h3>
                    {qualificacao_socio ? <CustomInput inputName={`socio${idSocio}_QualificacaoSocio`} initialData={qualificacao_socio} /> : <CustomInput inputName={`socio${idSocio}_QualificacaoSocio`} initialData={"DADO NÃO INFORMADO"} />}
                </li>
                <li>
                    <h3>Data de Entrada na Sociedade:</h3>
                    {entrada_sociedade ? <CustomInput inputName={`socio${idSocio}_DataEntradaSociedade`} initialData={entrada_sociedade} date /> : <CustomInput inputName={`socio${idSocio}_DataEntradaSociedade`} initialData={"00/00/0000"} date />}
                </li>
            </ul>
        </div>
    )
}

export { QuadroEmpresa, QuadroSocio }