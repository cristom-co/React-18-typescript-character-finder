import React, { useState } from "react";

import Modal from "./Modal";
import { ArrowRight } from "../SvgIcons";
import useRootStore from "../../store/store";

import { dataProps } from "../../types/all";

const ModalComments: React.FC<dataProps> = ({ data }) => {
  const { listCommentsz, updateCommentsz } = useRootStore();

  const [comment, setComment] = useState("");
  const clickComment = () => {
    updateCommentsz(comment, data?.character.id || "");
    setComment("");
  };

  return (
    <Modal title="Comments">
      <div className="flex flex-col">
        <div className=" flex flex-row gap-2">
          <textarea
            className="block p-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Write your thoughts here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <div className="self-center" onClick={clickComment}>
            <ArrowRight />
          </div>
        </div>
        <div className="p-4 overflow-scroll max-h-60">
          {listCommentsz.find((item) => item.id === data?.character.id) &&
            listCommentsz
              .find((item) => item.id === data?.character.id)
              ?.comments.map((item) => (
                <p className="border-b-2 p-3 text-gray-600">{item}</p>
              ))}
        </div>
      </div>
    </Modal>
  );
};

export default ModalComments;
