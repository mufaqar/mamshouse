import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div class="bg-gray-100 h-screen justify-center flex items-center flex-col ">
      <div>
        <center class=" m-auto">
          <div class=" tracking-widest mt-4">
            <span class="text-gray-500 text-6xl block">
              <span>4 0 4</span>
            </span>
            <span class="text-gray-500 text-xl font-bangla-mn">
              Sorry, We couldn't find what you are looking for!
            </span>
          </div>
        </center>
        <center class="mt-6">
          <Link
            href="/residences"
            class="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md"
          >
            Go back
          </Link>
        </center>
      </div>
    </div>
  );
};

export default NotFound;
