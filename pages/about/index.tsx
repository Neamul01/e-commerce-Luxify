import React from "react";
import ImageHero from "../../components/ImageHero";
import CommonLayout from "../../components/Layouts/CommonLayout";
import NavBroadcrumbs from "../../components/NavBroadcrumbs";

export default function index() {
  const items = [{ title: "about", href: "/about" }];
  return (
    <div>
      {/* navigation */}
      <CommonLayout>
        <NavBroadcrumbs items={items} />
      </CommonLayout>
      {/* image hero */}
      <ImageHero image="/background/about-us.jpg">about us</ImageHero>
    </div>
  );
}
