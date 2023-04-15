import React from "react";
import CommonLayout from "../../components/Layouts/CommonLayout";
import ImageHero from "../../components/ImageHero";
import NavBroadcrumbs from "../../components/NavBroadcrumbs";

export default function index() {
  const items = [{ title: "Contact", href: "/contact" }];
  return (
    <div>
      {/* navigation */}
      <CommonLayout>
        <NavBroadcrumbs items={items} />
      </CommonLayout>
      {/* image hero */}
      <ImageHero image="/background/contact-us.jpg">contact us</ImageHero>
      <CommonLayout>other text</CommonLayout>
    </div>
  );
}
