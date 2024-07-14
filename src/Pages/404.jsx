import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
        <h1 className='font-bold'>404, oops!</h1>
        <p className='font-semibold my-5'>Sorry, an unexpected error has occured</p>
        <p>
            {error.statusText || error.message}
        </p>
        </div>
    )
}

export default ErrorPage;