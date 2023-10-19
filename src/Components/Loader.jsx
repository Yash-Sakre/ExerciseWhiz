import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <MutatingDots
      height="100"
      width="100"
      color="#F04444"
      secondaryColor="#F04444"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
);

export default Loader;
