import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/images/jordan.jpeg",
    title: "Micheal jordan ",
  },
  {
    image: "/images/ljames.jpeg",
    title: "Lebron James ",
  },
  {
    image: "/images/giannis.jpeg",
    title: "Giannis Antetokoumpo ",
  },
  {
    image: "/images/noviski.jpeg",
    title: "Nowiszki",
  },
  {
    image: "/images/kyrie.jpeg",
    title: "Kyrie Irving",
  },
];

function App() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="h-screen bg-slate-700 pt-20">
      <div className="h-[400px] w-3/4 m-auto border">
      <Slider {...settings}>
        {
          data.map((item, index) => {
            return (
              <div key={index} className="bg-white">
                <div>
                  <img src={item.image} className="w-60 h-60 object-contain" />
                </div>
                <div className="p-6 bg-blue-500">
                  <p className="font-semibold text-white">{item.title}</p>
                </div>
              </div>
            );
          })
        }
        </Slider>
      </div>
    </div>
  );
}


export default App;
