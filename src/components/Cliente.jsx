import { useNavigate, Form, redirect, useAsyncError } from 'react-router-dom'
import {eliminarCliente} from '../data/clientes'

export const action = async ({params}) =>{

   await eliminarCliente(params.clienteId)

    return redirect('/')
}


const Cliente = ({ cliente }) => {

    const navigate = useNavigate();

    const { nombre, empresa, email, telefono, id } = cliente
    return (

        <tr className='border-b'>
            <td className='p-4 space-y-2'>
                <p className='text-2xl text-gray-800'>{nombre}</p>
                <p className='text-gray-500 text-sm'>{empresa}</p>
            </td>
            <td className="p-4">
                <p className='text-gray-600'><span className='text-gray-800 uppercase font '>Email: </span>{email}</p>
                <p className='text-gray-600'><span className='text-gray-800 uppercase font '>Telefono: </span>{telefono}</p>
            </td>

            <td className='p-4 flex gap-3'>
                <button
                    type='button'
                    className='text-blue-600 hover:text-blue-600 uppercase font-bold text-xs '
                    onClick={() => navigate(`clientes/${id}/editar`)}
                >
                    Editar
                </button>

                <Form
                    method='post'
                    action={`/clientes/${id}/eliminar`}
                    onSubmit={(e) => {
                        if(!confirm('Deseas elíminar este registro ')){
                            e.preventDefault();
                            eliminarCliente(e.target.value); 
                        }
                    }}
                >
                    <button
                        type='submit'
                        className='text-red-600 hover:text-red-600 uppercase font-bold text-xs'

                    >
                        Eliminar
                    </button>
                </Form>
            </td>
        </tr>

    )
}

export default Cliente