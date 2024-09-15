import React from "react";

import { Avatar } from "@nextui-org/avatar";

export default function Comments({ commentData }: any) {
  return (
    <div>
      <div className=" bg-gray-100 p-8">
        <div className="max-full mx-auto bg-white shadow-gray-900 shadow-md hover:shadow-lg hover:shadow-gray-900 rounded-lg my-4 p-6">
          {/* Commenter Information */}
          <div className="flex items-center mb-4">
            <div className=" h-12 w-12 gap-4 items-center">
              <Avatar className="rounded-full" src={`https://i.pravatar.cc/150?u=${commentData.name}`} />
              <Avatar className="text-xl font-bold" name={commentData.name} />
              
            </div>
            <div>
              <p className="text-lg font-semibold mt-">{commentData.email}</p>
            </div>
          </div>

          {/* Comment Body */}
          <p className="text-gray-700 text-base ">{commentData.body}</p>
        </div>
      </div>
    </div>
  );
}
