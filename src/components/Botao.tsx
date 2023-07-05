interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    children:any
    clasName?: string
    onClick?: ()=> void
}


export default function Botao(props: BotaoProps){
    return(
        <button onClick={props.onClick} className={`bg-blue-700 p-2 text-white rounded hover:opacity-90 ${props.clasName}`}>
            {props.children}
        </button>
    )
} 