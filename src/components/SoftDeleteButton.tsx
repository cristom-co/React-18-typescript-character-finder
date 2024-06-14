import useRootStore from "../store/store";
import {dataProps} from "../types/all"

const SoftDeleteButton: React.FC<dataProps> = ({ data }) => {
  const { updateListSoftDeletez } = useRootStore();

  const clickSoftDelete = () => {
    if (data) updateListSoftDeletez(data?.character.id);
  };

  return (
    <button
      className="bg-primary700 text-white px-4 rounded-md text-sm"
      onClick={clickSoftDelete}
    >
      Soft-Delete
    </button>
  );
};

export default SoftDeleteButton;
