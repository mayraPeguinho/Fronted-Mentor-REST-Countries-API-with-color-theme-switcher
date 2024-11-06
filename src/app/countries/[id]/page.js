import React from 'react';
import BackButton from "./components/BackButton";
import InfoCountry from "./components/InfoCountry";

export default function Country({ params }) {
  const { id } = React.use(params);

  return (
    <div className="flex flex-col p-10 gap-12">
      <BackButton />
      <InfoCountry id={id} />
    </div>
  );
}