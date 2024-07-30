import style from './SubmitButton.module.scss';

type SubmitButtonProps = {
    type: "desk" | "mob"
}

function SubmitButton( { type }: SubmitButtonProps ) {
    return <input 
                className={`${style.submitButton} ${type === "desk" ? "d-none" : "d-block"} ${type === "desk" ? "d-lg-block" : "d-lg-none"}`}
                type="submit"
                value="Salvar todos os dados"
            />
}

export { SubmitButton }