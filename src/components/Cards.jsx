const Cards = (details, price, icon, name) => {
  return (
    <div className="col-span-1 bg-white dark:bg-[#293947] shadow-md p-3 rounded-[10px] flex gap-4 items-center">
      <div className="w-[40px] h-[40px] bg-slate-100 rounded-full flex justify-center items-center">
        {icon}
      </div>
      <div className="second-container flex flex-col gap-1">
        <p className="text-xs text-slate-300">{details}</p>
        <p className="font-bold text-sm">{price}</p>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Cards;
