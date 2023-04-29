import { useContext } from "react";
import { AppContext } from "../App";
import "./Gallery.css";

export const Gallery = () => {
  const { result } = useContext(AppContext);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {/* <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src=""
            alt=""
          />
        </div> */}

        {result.map((image) => (
          <>
            <div
              className="card hoverr"
              data-aos="zoom-in-up"
              data-aos-duration="800"
            >
              <img
                className="h-auto max-w-full rounded-lg "
                src={image.urls.small}
                alt=""
              />
            </div>
          </>
        ))}
        {/* </div> */}

        <div className="result"></div>
      </div>
    </>
  );
};
