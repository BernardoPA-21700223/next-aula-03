'use client'
import {useEffect, useState} from 'react'

export default function Tarefas() {

    //
    // A. Gestão de estados
    // tarefas
    const [novaTarefa, setNovaTarefa] = useState<string>("")
    //lista de tarefas
    const [lista, setLista] = useState<string[]>([])


    
    // B. event handlers (interação do utilizador)
    function guadaNaLista(){  
       
       if (!novaTarefa) return
        setLista([... lista, novaTarefa])
        setNovaTarefa('')
    
    }

    //
    // C. renderização de componentes
    return (
        <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">

            <h2>Lista de Tarefas</h2>

            <input
                type="text"
                placeholder="Escreva algo..."
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 m-2 border border-green-700 rounded"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
            />
            <p>Nova Tarefa:{novaTarefa}</p>
            <button
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 m-2 border border-green-700 rounded"
                onClick ={guadaNaLista} 
            >
                Adicionar
            </button>

        
            
            <p>Lista de Tarefas:</p>
             
            <ul>
                {lista.map((tarefa,index) => (
                    <li key={index}>{tarefa}</li> )
                    )}
            </ul> 
            
        </section>
    )
}
