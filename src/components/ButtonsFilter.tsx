
interface butttonsFilterProps {
    currentValue: string;
    action: (id: string) => void;
    options: string[];
    title: string
  }

const ButtonsFilter:React.FC<butttonsFilterProps>  = ({ currentValue, action, options, title}) =>  {
    return (
      <div>
        <span>{title}</span>
        <div className="flex flex-row justify-between px-4 py-2 gap-2">
          {options.map((item) => (
            <button
              className={`p-3 rounded-md w-1/3 ${
                currentValue === item ? "bg-purple-500" : "bg-white"
              }`}
              onClick={() => action(item)}
            >
              {item === "" ? "All" : item}
            </button>
          ))}
        </div>
      </div>
    );
}

export default ButtonsFilter;