import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import useProyectos from "../hooks/useProyectos"
import Alerta from "../components/Alerta"

// Proyecto ( vista de cada proyecto del usuario individualmente)
const Proyecto = () => {
  // Obtner el id del proyecto
  const params = useParams()
  const { obtenerProyecto, proyecto, cargando, eliminarProyecto, alerta } = useProyectos()
  useEffect(() => {
    obtenerProyecto(params.id)
  }, [])

  const handleClick = () => {
    if (confirm('¿Deseas eliminar este Proyecto? Si eliminas este proyecto no lo podrás recuperar.')) {
      eliminarProyecto(params.id)
    } else {
      console.log('No')
    }
  }

  // Extraer alerta
  const { msg } = alerta

  const { nombre } = proyecto
  if (cargando) return 'Cargando...'
  return (
    <div className="flex justify-around">
      <h1 className="font-black text-4xl">{nombre}</h1>
      <Link
        className="flex items-center gap-2 py-3 px-7 cursor-pointer bg-yellow-400 hover:bg-yellow-500 rounded-full"
        to={`/proyectos/editar/${params.id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
        Editar
      </Link>
      <button
        onClick={handleClick}
        className="flex items-center gap-2 py-3 px-7 cursor-pointer bg-red-500 hover:bg-red-600 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>

        Eliminar
      </button>
      <div className="">
        {msg && <Alerta alerta={alerta} />}
      </div>
    </div>
  )
}

export default Proyecto
