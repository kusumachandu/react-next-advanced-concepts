import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <section className=" max-w-7xl py-5 px-10">
        <h1 className="font-bold text-center text-4xl py-5">Image-Layout</h1>
        <div className="relative grid grid-cols-2 gap-10">
          <div className="relative border border-gray-700 rounded">
            {/* the layout porperty in the image helps the image to be responsive
              but the images should be specifically what width and height you need
              it cannot work with the custoom height */}
            <Image
              layout="responsive"
              objectFit="cover"
              objectPosition="top"
              width={500}
              height={500}
              src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
              alt="sample-image"
            />
          </div>
          <div className="flex items-center">
            <p>
              the layout porperty in the image helps the image to be responsive
              but the images should be specifically what width and height you
              need it cannot work with the custoom height
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
