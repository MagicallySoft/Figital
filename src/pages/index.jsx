import Footer1 from "@/components/footers/Footer1";
import Header11 from "@/components/headers/Header11";
import Topbar from "@/components/headers/Topbar";
import BannerCollection from "@/components/homes/home-1/BannerCollection";
import BannerCountdown from "@/components/homes/home-1/BannerCountdown";
import Blogs from "@/components/common/Blogs";
import Collections from "@/components/homes/home-1/Collections";
import Features from "@/components/common/Features";
import Hero from "@/components/homes/home-1/Hero";
import Products from "@/components/common/Products3";
import ShopGram from "@/components/common/ShopGram";
import Testimonials from "@/components/common/Testimonials";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home || Modave  ",
  description: "Modave  ",
};

export default function HomePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar />
      <Header11 />
      <Hero />
      <Collections />
      <Products />
      <BannerCollection />
      <BannerCountdown />
      <Testimonials />
      <Blogs />
      <ShopGram />
      <Features />
      <Footer1 dark/>
    </>
  );
}
