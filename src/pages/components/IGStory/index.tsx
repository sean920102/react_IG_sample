import Item from "./item";
import Loading from "@/components/Loading";

import { useGetIGStoiesQuery } from "@/services/homeServices";
//TODO del

const IGStory: React.FC = () => {
  const { data, isLoading } = useGetIGStoiesQuery("all");
  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      {/* <Item name="sean920102" avatar='/images/avatars/a1.png'></Item> */}
      {isLoading && (
        <div className="flex justify-center w-full">
          <Loading />
        </div>
      )}
      {!isLoading &&
        data?.map((item) => {
          const { id, name, avatar } = item;
          return <Item key={id} name={name} avatar={avatar} />;
        })}
    </div>
  );
};

export default IGStory;
