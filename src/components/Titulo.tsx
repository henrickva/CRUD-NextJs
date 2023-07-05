

export default function Titulo(props:any){
    return(
        <div className="flex flex-col justify-center">
            <h1 className="p-2 text-xl text-center">
                {props.children}
            </h1>
            <hr className="border-2"/>
        </div>
    )
}