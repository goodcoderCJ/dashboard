import { FaBars, FaHouse, FaPeopleGroup } from "react-icons/fa6";

const heroInfo = [
  {
    icon: <FaBars className="text-blue-800" />,
    details: "Earnings",
    price: 3412,
    id: 1,
  },
  {
    icon: <FaHouse className="text-blue-800" />,
    details: "People Oriented",
    price: 3416,
    id: 2,
  },
  {
    icon: <FaPeopleGroup className="text-blue-800" />,
    details: "Security Guarantee",
    price: 3802,
    id: 3,
  },
  {
    icon: <FaPeopleGroup className="text-blue-800" />,
    details: "People Oriented",
    price: 3416,
    id: 4,
  },
  {
    icon: <FaBars className="text-blue-800" />,
    details: "Earnings",
    price: 33812,
    id: 5,
  },
  {
    icon: <FaHouse className="text-blue-800" />,
    details: "People Oriented",
    price: 37816,
    id: 6,
  },
];

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-10 gap-3 px-6">
      {heroInfo.map((info) => (
        <div
          key={info.id}
          className="col-span-1 bg-white dark:bg-[#304355] shadow-md p-3 rounded-[10px] flex gap-4 items-center"
        >
          <div className="w-[40px] h-[40px] bg-slate-200 dark:bg-[#293947] rounded-full flex justify-center items-center">
            {info.icon}
          </div>
          <div className="second-container flex flex-col gap-1">
            <p className="text-xs text-slate-400 dark:text-[#c5c4c4]">
              {info.details}
            </p>
            <p className="font-bold text-sm dark:text-[#c5c4c4]">
              {info.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
