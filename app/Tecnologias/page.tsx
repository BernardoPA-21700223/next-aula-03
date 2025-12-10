import Tecnologia from '@/components/Tecnologia/Tecnologia'
import {tecnologias} from '@/data/tecnologias';



export default function ProfissoesProps(){

   return (
        <>
            <h2>Tecnologias Exploradas</h2>

            <ul>
                {tecnologias.map((tecnologias, i) => (
                    <Tecnologia
                        key={i}
                        title={tecnologias.title}
                        image={tecnologias.image}
                        description={tecnologias.description}
                        rating={tecnologias.rating}
                    />
                ))}
            </ul>
        </>
    );
}