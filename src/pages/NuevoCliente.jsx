import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarCliente } from '../data/clientes'

export const action = async ({ request }) => {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData); 

  const email = formData.get("email");

  // Validacion
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errores.push("El email no es valido");
  }

  if (errores.length) {
    return errores;
  }

  await agregarCliente(datos)

  return redirect('/')
};

const NuevoCliente = () => {
  const errores = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-3xl uppercase text-blue-900">
        Nuevo Cliente
      </h1>
      <p className="mt-2 text-sm">
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 hover:bg-blue-700 text-white px-3 py-1 font-bold uppercase rounded-sm md:hidden lg:block"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-4/5 mx-auto px-5 py-10 mt-10">
        <p className=" text-xl uppercase text-blue-900 mb-5 font-medium">
          Formulario aquí
        </p>

        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="POST" noValidate>
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 hover:bg-blue-700 cursor-pointer p-3 uppercase text-white text-lg rounded-sm"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
