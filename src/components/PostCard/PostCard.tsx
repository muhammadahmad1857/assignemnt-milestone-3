import { Avatar } from "@nextui-org/avatar";

interface PropsType {
  postData: {
    body: string;
    id: number;
    title: string;
    userId: number;
  };
}
export const PostCard = (props: PropsType) => {
  console.log(props);

  const { postData } = props;
  console.log(`postData ${postData}`);

  return (
    <div>
      <div className="flex">
        <div className="max-w-sm rounded shadow-lg bg-white m-4">
          {/* Post Image */}
          <div>
            <Avatar src={`https://i.pravatar.cc/150?u=${postData.id}`} />
            {/* <Avatar className="text-xl font-bold" name={postData.name} /> */}
          </div>

          {/* Post Content */}
          <div className="px-6 py-4">
            {/* Post Title */}
            <div className="font-bold text-xl mb-2 text-black">
              {postData.title}
            </div>
            {/* Post Body */}
            <p className="text-gray-700 text-base">{postData.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
