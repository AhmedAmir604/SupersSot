import ConfirmLocation from "@/_components/ConfirmLocation";
import React from "react";
import VisitingReason from "./VisitingReason";

export default function Booking() {
  return (
    <section className="w-full px-20 mt-10 flex justify-around">
      <div className="w-[60%] flex flex-col gap-4">
        <ConfirmLocation />
        <VisitingReason />
      </div>
      <img src="map.png" className="w-[25rem] h-[20rem]" />
    </section>
  );
}