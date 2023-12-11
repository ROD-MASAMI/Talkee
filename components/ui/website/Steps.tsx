import React from "react";

const Steps = () => {
  return (
    <div className=" mx-auto my-32 max-w-5xl sm:mt-56 ">
      <div className=" mb-12 px-6 lg:px-8">
        <div className=" mx-auto max-w-2xl sm:text-center">
          <h2 className=" mt-2 font-bold text-4xl  text-foreground">
            Get Knowlegeable with few presses of a button
          </h2>
          <p className=" mt-4 text-lg text-muted-foreground">
            Start chatting with your pdf in few quick to understand steps
          </p>
        </div>
      </div>

      <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
        <li className="flex items-center  text-muted-foreground  space-x-2.5 rtl:space-x-reverse">
          <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            1
          </span>
          <div className=" items-start flex flex-col">
            <h3 className="font-medium leading-tight">
              Sign up for an account
            </h3>
            <p className="text-sm text-left ">
              Either start out with a free plan or upgrade to premium
            </p>
          </div>
        </li>
        <li className="flex items-center justify-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
          <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            2
          </span>
          <span className=" items-start flex flex-col">
            <h3 className="font-medium leading-tight">
              Upload your document in pdf format
            </h3>
            <p className="text-sm text-left">
              drag and drop or browse from your device and wait for us to
              process it really quickly for you
            </p>
          </span>
        </li>
        <li className="flex justify-center items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
          <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            3
          </span>
          <span className=" items-start flex flex-col">
            <h3 className="font-medium leading-tight">
              Start asking questions
            </h3>
            <p className="text-sm text-left">
              Ask our chatbot any question about the pdf content
            </p>
          </span>
        </li>
      </ol>
    </div>
  );
};

export default Steps;
