interface EntradaProps{
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    className?: string
    somenteLeitura?: boolean
    valorMudou?:(valor:any) => void
}

export default function Entrada(props:EntradaProps){
    return(
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>

            <input 
                onChange={e=>props.valorMudou?.(e.target.value)}
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                className={`border-b-2 border-blue-200 focus:outline-none px-4 py-2 ${props.somenteLeitura?'':'focus:bg-blue-100'} rounded-lg`}
            />
        </div>
    )
}