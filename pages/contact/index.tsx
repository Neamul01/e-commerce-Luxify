import React from "react";
import CommonLayout from "../../components/Layouts/CommonLayout";
import ImageHero from "../../components/ImageHero";

export default function index() {
  return (
    <div>
      <ImageHero image="/background/contact-us.jpg">contact us</ImageHero>
      <CommonLayout>other text</CommonLayout>
    </div>
  );
}
