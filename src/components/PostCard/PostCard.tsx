import Image from "next/image";

export const PostCard = (props: any) => {
  const { postData } = props;
  console.log(`postData ${postData}`);

  return (
    <div>
      <div className="flex">
        <div className="max-w-sm rounded shadow-lg bg-white m-4">
          {/* Post Image */}
          <Image
            className="w-full"
            src="https://via.placeholder.com/400x200"
            alt="Post Image"
            width={500}
            height={500}
          />

          {/* Post Content */}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black"> {postData.title} </div>
            <p className="text-gray-700 text-base">{postData.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
