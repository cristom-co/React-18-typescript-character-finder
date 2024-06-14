import { butttonsFilterProps } from "../types/all";

const ButtonsFilter: React.FC<butttonsFilterProps> = ({
  currentValue,
  action,
  options,
  title,
}) => {
  return (
    <div>
      <h2 className="font-light text-sm pt-2 pl-2 text-gray-500">{title}</h2>
      <div className="flex flex-row justify-between px-1 py-2 gap-2">
        {options.map((item, index) => (
          <button
            key={index}
            className={`px-5 py-3 text-sm rounded-lg w-1/3 border-2 border-gray-300 font-medium  ${
              currentValue === item
                ? "bg-primary100 text-primary700"
                : "bg-white "
            }`}
            onClick={() => action(item)}
          >
            {item === "" ? "All" : item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonsFilter;
