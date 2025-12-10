interface TecnologiaCard {
  title: string;
  image: string;

}

export default function TecnologiaCard({ title, image}: TecnologiaCard) {
  return (
    <>
      <div className="w-48 h-64 bg-white p-4 m-4 rounded-2xl shadow-lg flex flex-col items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800 text-center">{title}</h2>
        <img
            src={image}
            alt={title}
            className="w-20 h-20 object-contain my-4"
        />
        </div>
    </>
  );
}