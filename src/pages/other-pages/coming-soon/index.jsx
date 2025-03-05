import CommingSoon from "@/components/otherPages/CommingSoon";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Comming Soon || Modave  ",
  description: "Modave  ",
};

export default function CommingSoonPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <CommingSoon />
    </>
  );
}
