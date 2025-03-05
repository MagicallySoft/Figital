import BlogDetail1 from "@/components/blogs/BlogDetail1";
import BlogGrid from "@/components/blogs/BlogGrid";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";

import Footer1 from "@/components/footers/Footer1";
import Header11 from "@/components/headers/Header11";
import Topbar6 from "@/components/headers/Topbar6";
import { allBlogs } from "@/data/blogs";
import React from "react";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Blog Detail || Modave  ",
  description: "Modave  ",
};
export default function BlogDetailsPage1() {
  let params = useParams();
  const id = params.id;

  const blog = allBlogs.filter((p) => p.id == id)[0] || allBlogs[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar6  />
      <Header11 />
      <BlogDetail1 blog={blog} />
      <RelatedBlogs />
      <Footer1 dark/>
    </>
  );
}
