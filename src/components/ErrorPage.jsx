import { useRouteError } from 'react-router-dom';
import ImgError from '../img/error.webp'

const ErrorPage = () => {

    const error = useRouteError()

    return (
        <div
        className='space-y-4 flex justify-center flex-col'>
            <h1 className='text-center text-6xl font-extrabold mt-20 text-blue-900'>CRM - Clientes</h1>
            <p className='text-center font-bold text-gray-600'>Hubo un error</p>
            <p className='text-center text-red-500 text-lg font-bold '>{error.statusText || error.message}</p>
            <img src={ImgError} alt="error" className='rounded-md text-center'/>
        </div>
    )
}

export default ErrorPage