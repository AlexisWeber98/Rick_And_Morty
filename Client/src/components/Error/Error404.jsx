import style from './Error404.module.css'

const Error =() => {
    return (
        <div className={style.error}>
            <h1>Error 404</h1>
            <h2>Hey Bro!</h2>
            <h3 >what are you doing here? This page doesn't exist, go back!</h3  >
        </div>
        )
}


export default Error

