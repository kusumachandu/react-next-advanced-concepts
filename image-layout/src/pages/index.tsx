import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <section className="py-5 px-10">
        <h1 className="font-bold text-center text-4xl">Image-Layout</h1>
        <div className="">
          {/* the layout porperty in the image helps the image to be responsive
              but the images should be specifically what width and height you need
              it cannot work with the custoom height */}
          <Image
            layout="responsive"
            src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
            width={1900}
            height={500}
            alt="sample-image"
          />
        </div>
      </section>
    </Fragment>
  );
}
