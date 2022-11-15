import * as React from "react";
import styled from "styled-components";

// LightGallery imports
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

const LightGalleryContainer = styled.div`
  /* margin-top: 1.45rem; */
`;

function Gallery() {
  const onInit = () => {
    console.log("light gallery has been initiated");
  };

  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  return (
    <LightGallery
      elementClassNames="light-gallery-wrapper"
      // onInit={onInit}
      // onBeforeSlide={onBeforeSlide}
      speed={400}
      plugins={[lgZoom]}
      zoomFromOrigin={false}
      mode="lg-fade"
    >
      {/* <a href="img/img1.jpg">
          <img alt="img1" src="img/thumb1.jpg" />
        </a> */}
      <a
        data-lg-size="5000-3224" // needed for lgZoom plugin, uses default if not provided
        className="gallery-item"
        data-src="https://picsum.photos/id/297/5000/3224"
        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
      >
        <img
          // className="img-responsive"
          src="https://picsum.photos/id/297/5000/3224"
        />
      </a>
      <a
        data-lg-size="1500-1000"
        data-pinterest-text="Shinimamiya, Osaka, Japan"
        data-tweet-text="Shinimamiya, Osaka, Japan"
        className="gallery-item"
        data-src="https://picsum.photos/id/115/1500/1000.jpg"
        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
      >
        <img
          // className="img-responsive"
          src="https://picsum.photos/id/115/1500/1000"
        />
      </a>
      <a
        data-lg-size="5000-2917"
        className="gallery-item"
        data-src="https://picsum.photos/id/364/5000/2917"
        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
      >
        <img
          // className="img-responsive"
          src="https://picsum.photos/id/364/5000/2917"
        />
      </a>
      <a
        data-lg-size="5000-3333"
        className="gallery-item"
        data-src="https://picsum.photos/id/1060/5000/3333.jpg"
        data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11' >Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>"
      >
        <img
          // className="img-responsive"
          src="https://picsum.photos/id/1060/5000/3333.jpg"
        />
      </a>

      {/* ******************** */}
    </LightGallery>
  );
}

export default Gallery;
