import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps{
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: ()=> void
}

export default function Formulario(props:FormularioProps){

    const id = props.cliente?.id
    const [nome, setNome] =useState(props.cliente?.nome ?? '')
    const [idade, setIdade] =useState(props.cliente?.idade ?? 0)

    return(
        <div>
            {id?(
                <Entrada somenteLeitura texto="Código" valor={id}></Entrada>
            ):false}

            <Entrada 
                className='my-2'
                texto="Nome" 
                valor={nome} 
                valorMudou={setNome}
            />
            <Entrada 
                texto="Idade" 
                tipo="number" 
                valor={idade} 
                valorMudou={setIdade}
            />

            <div className="flex justify-end mt-3"> 
                <Botao
                    onClick={()=>props.clienteMudou?.(new Cliente(nome, +idade, id))} 
                    clasName="bg-green-600 m-1">
                        Salvar
                </Botao>

                <Botao 
                    onClick={props.cancelado}
                    clasName="bg-red-600 m-1"
                >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}