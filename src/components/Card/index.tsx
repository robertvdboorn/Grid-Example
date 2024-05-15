const Card = ({title} : {title: string}) => {
  return (
    <div className="bg-white text-black p-4 rounded shadow-md">
      <h2 className="font-bold text-xl">{title}</h2>
    </div>
  );
};

export default Card;
