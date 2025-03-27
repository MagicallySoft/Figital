import Footer1 from "@/components/footers/Footer1";
import Header11 from "@/components/headers/Header11";
import Topbar6 from "@/components/headers/Topbar6";
import Wishlist from "@/components/otherPages/Wishlist";
import { Link } from "react-router-dom";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Wishlist || Assuredcart  ",
  description: "Assuredcart  ",
};
export default function WishListPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar6 />
      <Header11 />
      <Wishlist />

      <Footer1 dark />
    </>
  );
}
