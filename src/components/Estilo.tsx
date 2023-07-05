import Titulo from "./Titulo"

interface EstiloProps{
    titulo?:string
    children: any
}

 export default function Estilo(props: EstiloProps){
    return(
        <div className="flex flex-col w-2/3 rounded-sm bg-white text-gray-800">
            <Titulo>{props.titulo}</Titulo>
            <div className="p-2">
                {props.children}
            </div>
        </div>
    )
 }