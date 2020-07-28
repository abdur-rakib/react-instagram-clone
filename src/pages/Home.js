import React from "react";
import Posts from "../components/Posts";
import Header from "../components/Header";
import ImageUpload from "../components/ImageUpload/ImageUpload";
// import InstagramEmbed from "react-instagram-embed";

const Home = () => {
  return (
    <>
      <Header />
      <div className="row d-flex justify-content-center container mx-auto">
        <ImageUpload />
        <Posts />
        {/* <User /> */}
        {/* <InstagramEmbed
          className="mt-4 pt-3"
          url="https://www.instagram.com/p/B-H24ezgjdT/"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        /> */}
      </div>
    </>
  );
};

export default Home;
