import IGHeader from "@/components/IGHeader";
import IGContainer from "@/components/IGContainer";
import IGStory from "@/pages/components/IGStory";
import IGPost from "@/pages/components/IGPost";
import IGProfile from "@/pages/components/IGProfile";
import Loading from "@/components/Loading";
import { useGetIGPostsQuery } from "@/services/homeServices";

const IGPostList: React.FC = () => {
  const num: number = 1;
  const { data, isLoading } = useGetIGPostsQuery("all");
  return (
    <>
      {isLoading && (
        <div className="w-full flex justify-center mt-20">
          <Loading />
        </div>
      )}
      {!isLoading &&
        data?.map((item) => {
          const {
            id,
            location,
            account,
            avatar,
            photo,
            likes,
            description,
            hashTags,
            createTime,
          } = item;
          return (
            <IGPost
              location={location}
              account={account}
              avatar={avatar}
              photo={photo}
              likes={likes}
              description={description}
              hashTags={hashTags}
              createTime={createTime}
              key={id}
            />
          );
        })}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className="flex lg:justify-center">
          <div className="w-full lg:w-[600px]">
            <IGStory />
            <IGPostList />
          </div>
          <div className="hidden lg:block lg:w-[424px]">
            <IGProfile />
            {/* <IGUser avatar="/images/avatars/a9.png" account="安安你好" location='test' size='medium' showFollow={true} isFollowing={false}/> */}
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
