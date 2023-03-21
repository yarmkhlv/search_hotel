/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../assets/slider/image1.jpg';
import image2 from '../assets/slider/image2.jpg';
import image3 from '../assets/slider/image3.jpg';
import image4 from '../assets/slider/image4.jpg';

const imageSlider = [
  {
    id: 1,
    src: image1,
    alt: 'pic1',
  },
  {
    id: 2,
    src: image2,
    alt: 'pic2',
  },
  {
    id: 3,
    src: image3,
    alt: 'pic3',
  },
  {
    id: 4,
    src: image4,
    alt: 'pic4',
  },
];

const settings = {
  className: 'center12312312',

  infinite: true,
  speed: 300,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  arrows: false,
};

export function InfiniteSlider() {
  const elSliderRender = imageSlider.map((el) => (
    <div key={el.id}>
      <img className="slider-item" src={el.src} alt={el.alt} />
    </div>
  ));
  return (
    <div className="hotels__slider">
      <Slider {...settings}>{elSliderRender}</Slider>
    </div>
  );
}
