import IGHeader from "@/components/IGHeader";
import IGContainer from "@/components/IGContainer";
import IGUser from "@/components/IGUser";
import { useAppSelector } from '@/hook';
import {Friend} from "@/slices/friendSlice";


const Following: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends;
  return (
    <>
      <IGHeader></IGHeader>
      <IGContainer>
        <p className="my-8 font-bold text-2xl px-4 box-border">Following</p>
        <div className="shadow-md mt-8 mx-2 box-border">
          {friends.map((item:Friend) => {
            const { id, account, avatar, isFollowing, location } = item;
            return (
              <div className="-mt-3" key={id}>
                <IGUser
                  id = {id}
                  account={account}
                  avatar={avatar}
                  location={location}
                  isFollowing={isFollowing}
                  showFollow
                />
              </div>
            );
          })}
        </div>
      </IGContainer>
    </>
  );
};

export default Following;
