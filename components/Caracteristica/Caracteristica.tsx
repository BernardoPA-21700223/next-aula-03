interface CaracteristicaProps{
descricao: string
}

export default function CaracteristicaProps ({ descricao}: CaracteristicaProps){



    return(

        <div className="bg-blue-300 p-2 m-2">
            <p>{descricao}</p>
        </div>

    )
}