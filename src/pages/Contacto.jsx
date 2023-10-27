import {useNavigate} from 'react-router-dom'

const Contacto = () => {

    const navigate = useNavigate()
    return (
        <>
            <h1 className="font-black text-3xl uppercase text-blue-900">Contacto</h1>


            <div className='flex justify-end'>
                <button
                    className='bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-sm'
                    onClick={() => navigate('/')}
                >
                    Volver
                </button>
            </div>

        </>
    )
}

export default Contacto