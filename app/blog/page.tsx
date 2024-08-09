import BlogCarusel from "./BlogCarusel";
import "./styles.css";
import Image from "next/image";

function page() {
  return (
    <>
      <div>
        <div className="elipse2-b"></div>
        <div className="elipse1-b"></div>
      </div>
      <div className="blog-hero">
        <div className="blog-hero-title">
          <h1>Gaming Blog & News</h1>
          <p>
            At all times, our dedicated customer support team is ready to assist
            you. Feel free to ask us anything; we're here to help
          </p>
        </div>
        <Image
          alt="test"
          src="/blog/blog-img2.png"
          width={600}
          height={200}
          className="float-left w-2/5"
        />
        <Image
          alt="test"
          src="/blog/blog-img1.png"
          width={800}
          height={200}
          className="float-right w-2/4 mt-32"
        />
        <div className="clear-both"></div>
      </div>

      <div className="blog-carusel-container">
        <h2 className="text-left mb-6 mt-10">Featured Posts</h2>
        <BlogCarusel />
      </div>
    </>
  );
}

export default page;
