/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import { generateImage } from "../../lib/api/generate";
import { Skeleton } from "../cli/skelton";

const PromptResult = () => {
  const { prompt } = useParams();
  const decodedPrompt = decodeURIComponent(prompt as string);

  const { key } = useForm();

  const [imageData, setImageData] = useState<string>("");

  useEffect(() => {
    const getImage = async () => {
      try {
        const res = await generateImage(decodedPrompt, key);

        setImageData(res.data[0].url);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    getImage();
  }, []);

  return (
    <main className="w-full h-screen py-10 center">
      <section className="container flex flex-col gap-4 h-[90%]">
        <div className="flex items-center gap-4">
          <img
            alt="Avatar"
            height="32"
            width="32"
            className="shrink-0 rounded-full"
            src="https://vercel.com/api/www/avatar/dYVR9ydParYGSk95vEl0JUqs?s=64"
          ></img>

          <div className="relative inline max-w-full sm:max-w-[65%] min-w-0 rounded-2xl bg-[#ebebeb] px-3 py-1">
            <span className="text-left text-sm line-clamp-1 text-ellipsis">
              {prompt}
            </span>
          </div>
        </div>

        <div className="border border-border rounded-xl w-full sm:flex-1 grid place-items-center p-5">
          {imageData ? (
            <img
              src={imageData}
              className="w-full aspect-video object-cover"
              alt=""
            />
          ) : (
            <Skeleton className="w-full aspect-video rounded-xl">
              <img
                src={"https://generated.vusercontent.net/placeholder.svg"}
                className="w-full aspect-video object-cover"
                alt=""
              />
            </Skeleton>
          )}
        </div>
      </section>
    </main>
  );
};

export default PromptResult;
