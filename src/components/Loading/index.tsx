import style from './Loading.module.scss';

function Loading() {
    return (
        <div className={`spinner-border ${style.spinnerStyle}`} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export { Loading }