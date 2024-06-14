import { useEffect } from "react";
//Apollo client
import { useQuery } from "@apollo/client";
import { DETAIL_CHARACTER } from "../graphql/queries";

//Router
import { useParams } from "react-router-dom";

//types
import { Character as typeCharacter } from "../types/all";

//components
import CharacterDetail from "../components/Character/CharacterDetail";
import ModalComments from "../components/Modal/ModalComments";
import SoftDeleteButton from "../components/SoftDeleteButton";

//store
import useRootStore from "../store/store";

export default function Character() {
  const { characterId } = useParams<{ characterId: string }>();

  const { loading, data, refetch } = useQuery<{ character: typeCharacter }>(
    DETAIL_CHARACTER,
    {
      variables: { characterId },
    }
  );

  const { listSoftDeletez } = useRootStore();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {listSoftDeletez.find((item) => item === data?.character.id) ? (
            <div className="flex h-full w-full justify-center items-center">
              <h1 className="text-gray-500 font-bold">CHARACTER DELETED</h1>
            </div>
          ) : (
            <div className="px-16 flex flex-col ">
              {data && <CharacterDetail data={data} />}
              <div>
                <h2 className="py-2 font-medium">Actions</h2>
                <div className="flex flex-row gap-2">
                  {data && (
                    <>
                      <ModalComments data={data} />
                      <SoftDeleteButton data={data} />
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
