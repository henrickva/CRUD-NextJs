'use client'
import Cliente from '@/core/Cliente'
import { IconeEdicao, IconeTrash } from './Icones'

interface TabelaProps{
    children:any
    clientes: Cliente[]
    clienteSelecionado?: (cliente:Cliente) => void
    clienteExcluido?: (cliente:Cliente) =>void
}

export default function Tabela(props:TabelaProps){

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return (
            <tr>
                <th className='text-center p-2'>Código</th>
                <th className='text-center p-2'>Nome</th>
                <th className='text-center p-2'>Idade</th>
                {exibirAcoes ? <th className='text-center p-2'>Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i )=>{
            return(
                <tr 
                    key={cliente.id}
                    className={`${i % 2 === 0 ? 'bg-blue-200': 'bg-blue-100'}`}
                >
                    <td className='text-center p-2'>{cliente.id}</td>
                    <td className='text-center p-2'>{cliente.nome}</td>
                    <td className='text-center p-2'>{cliente.idade}</td>
                    {exibirAcoes? renderizarAcoes(cliente): false}
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente){
        return(
            <td className='flex justify-center'>
                {props.clienteSelecionado ?(
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className='flex justify-center items-center text-green-900 rounded-full p-1 m-1 hover:bg-blue-300'>{IconeEdicao}</button>
                ):false}
                
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)}className='flex justify-center items-center text-red-700 rounded-full p-1 m-1 hover:bg-blue-300'>{IconeTrash}</button>
                ):false}
                
            </td>
        )
    }

    return(
        <table className='text-blue-900 w-full rounded overflow-hidden'>
            <thead className='text-white bg-gradient-to-r from-blue-700 to-blue-500'>
                {renderizarCabecalho()}
            </thead>

            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}