import Image from "next/image";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
export const PostCard = (props: any) => {
  const { postData } = props;
  console.log(`postData ${postData}`);

  return (
    <div>
      <div className="flex">
        <div className="max-w-sm rounded shadow-lg bg-white m-4">
          {/* Post Image */}
          <div className="align-top">
            <Avatar src={`https://i.pravatar.cc/150?u=${postData.id}`} size="sm" />
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

// <Image
//   className="w-full"
//   src="https://via.placeholder.com/400x200"
//   alt="Post Image"
//   width={500}
//   height={500}
// />;
