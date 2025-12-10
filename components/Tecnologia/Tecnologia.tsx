interface TecnologiaProps {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export default function TecnologiaProps({ title, image, description, rating }: TecnologiaProps) {
  return (
    <>
      <div className="bg-blue-300 p-2 m-2 rounded-xl">
        <h2 className="text-xl font-bold">{title}</h2>

        <img 
          src={image} 
          alt={title} 
          className="w-11 h-12 my-2"
        />

        <p>{description}</p>

        <p className="font-semibold">Rating: {rating}</p>
      </div>
    </>
  );
}