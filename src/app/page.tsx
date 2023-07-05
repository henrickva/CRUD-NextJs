'use client'
import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Botao from "@/components/Botao";
import Estilo from "@/components/Estilo";
import Formulario from "@/components/Formulario";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { useEffect, useState } from "react";

export default function Home(props:any) {

  const repo : ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  const [clientes, setClientes] = useState<Cliente[]>([])

  const [visivel, setVisivel] = useState<'tabela'|'formulario'>('tabela')

  useEffect(obterTodos,[])

  function obterTodos(){
    repo.obterTodos().then(clientes=>{
        setClientes(clientes)
        setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente:Cliente){
      setVisivel('formulario')
      setCliente(cliente)
  }

  async function clienteExcluido(cliente:Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente:Cliente){
    await repo.salvar(cliente)
    obterTodos()
    setVisivel('formulario')
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('formulario')
  }

  

  return (
    <main className="bg-blue-900 h-screen text-white flex flex-col justify-center items-center">
      <Estilo titulo="Cadastro simples">
      {visivel === 'tabela' ?(
          <>
            <Botao 
              onClick={novoCliente}
              clasName="mb-2"
            >
              Novo Cliente
            </Botao>
            <Tabela 
              clientes={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            >
            </Tabela>
          </>
           
        ):(
          <Formulario 
            cancelado={()=>setVisivel('tabela')}
            cliente={cliente} 
            clienteMudou={salvarCliente} 
          />

        )}
      </Estilo>
    </main>
  )
}
