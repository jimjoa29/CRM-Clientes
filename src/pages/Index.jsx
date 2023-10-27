import { useLoaderData } from 'react-router-dom'
import Cliente from '../components/Cliente';
import { obtenerClientes } from '../data/clientes'

export function loader() {
  const clientes = obtenerClientes()
  return clientes
}


const Index = () => {

  const clientes = useLoaderData()

  return (
    <>
      <div className="font-black text-3xl uppercase text-blue-900 ">Clientes</div>
      <p className='mt-2'>Administra tus Clientes</p>

      {clientes.length ? (
        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white' >
            <tr>
              <th className='p-2 text-lg'>Clientes</th>
              <th className='p-2 text-lg'>Contacto</th>
              <th className='p-2 text-lg'>Acciones</th>
            </tr>
          </thead>

          <tbody className=''>
            {clientes.map(cliente => (
              <Cliente
                cliente={cliente}
                key={cliente.id}
              />
            ))}
          </tbody>

        </table>
      ) : (
        <p className="text-center mt-10"></p>
      )}

    </>
  )
}

export default Index