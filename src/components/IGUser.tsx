import { useAppDispatch} from "@/hook"; 
import { follow, unFollow } from "../slices/friendSlice";
import { memo } from "react";

type IGUserProps = {
  size?: "medium" | "small";
  showFollow?: boolean;
  isFollowing?: boolean;
  account?: string;
  location?: string;
  avatar?: string;
  id?: number;
};



const IGUser: React.FC<IGUserProps> = memo(
  ({
  size = "small",
  showFollow = false,
  isFollowing = false,
  account,
  location,
  avatar,
  id,
}) => {
  const dispatch = useAppDispatch();

  function followClickHandler() {
    console.log('click!',id)
    if (id === undefined) return;
    if (isFollowing) {
      dispatch(unFollow(id));
    } else {
      dispatch(follow(id));
    }
  }
  return (
    <div className="flex h-[70px] items-center box-border px-4">
      <div
        className={`${
          size === "small" ? "w-[40px] h-[40px]" : "w-[60px] h-[60px]"
        } overflow-hidden rounded-full`}
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="ml-4">
        <p className="font-bold text-sm mb-0">{account}</p>
        <p className="text-gray-400 text-xs mb-0">{location}</p>
      </div>
      {showFollow && (
        <p
          className={`${
            isFollowing ? "text-gray-700" : "text-blue-400"
          } ml-auto text-xs font-bold cursor-pointer`}
          onClick={followClickHandler}
        >
          {isFollowing ? "FOLLOWING" : "FOLLOW"}
        </p>
      )}
    </div>
  );
});

export default IGUser;
