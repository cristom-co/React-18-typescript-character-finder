import { useState } from "react";
import { OrderSvg } from "../SvgIcons";
import useRootStore from "../../store/store";

const CharactersOrder = () => {
  const { updateOrderCharactersz } = useRootStore();

  const [flagOrder, setFlagOrder] = useState(false);

  const handleOrder = () => {
    updateOrderCharactersz(flagOrder);
    setFlagOrder(!flagOrder);
  };
  return (
    <div onClick={handleOrder}>
      <OrderSvg />
    </div>
  );
};

export default CharactersOrder;
