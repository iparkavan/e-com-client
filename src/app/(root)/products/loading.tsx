import React from "react";
import { useGetProducts } from "../../hooks/product-hooks";

const Loading = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
      {[...Array(10)].map((i) => (
        <div className="bg-white max-w-[300px] h-[350px] min-w-[200px] rounded-md border shadow border-blue-200 overflow-hidden">
          <div className="animate-pulse">
            <div className="h-[200px] bg-slate-200">
              <div className="pt-56 p-4 flex flex-col gap-4">
                <div className="w-[190px] h-3 bg-slate-200"></div>
                <div className="w-[80px] h-3 bg-slate-200"></div>
                <div className="flex flex-col gap-3">
                  <div className="w-[220px] h-2 bg-slate-200"></div>
                  <div className="w-[190px] h-2 bg-slate-200"></div>
                  <div className="w-[180px] h-2 bg-slate-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
