import React, { useState } from "react";

const Glass = () => {
  let arrButton = [
    "g1",
    "g2",
    "g3",
    "g4",
    "g5",
    "g6",
    "g7",
    "g8",
    "g9",
    "v1",
    "v2",
    "v3",
    "v4",
    "v5",
    "v6",
    "v7",
    "v8",
    "v9",
  ];
  const arrButton2 = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      icon: "../../../img/glassesImage/g1.jpg",
      duongDanHinhAnh: "../../../img/glassesImage/g1.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      icon: "../../../img/glassesImage/g2.jpg",
      duongDanHinhAnh: "../../../img/glassesImage/g2.jpg",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      icon: "../../../img/glassesImage/g3.jpg",
      duongDanHinhAnh: "../../../img/glassesImage/g3.jpg",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      icon: "../../../img/glassesImage/g4.jpg",
      duongDanHinhAnh: "../../../img/glassesImage/g4.jpg",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      icon: "../../../img/glassesImage/g5.jpg",
      duongDanHinhAnh: "../../../img/glassesImage/g5.jpg",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      icon: "../../../img/glassesImage/g6.jpg",
      duongDanHinhAnh: "../../../img/glassesImage/g6.jpg",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      icon: "../../../img/glassesImage/g7.jpg",
      duongDanHinhAnh: "../../../img/glassesImage/g7.jpg",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      icon: "../../../img/glassesImage/g8.jpg",
      duongDanHinhAnh: "../../../img/glassesImage/g8.jpg",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      icon: "../../../img/glassesImage/g9.jpg",
      duongDanHinhAnh: "../../../img/glassesImage/g9.jpg",
    },
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      icon: "../../../img/glassesImage/v1.png",
      duongDanHinhAnh: "../../../img/glassesImage/v1.png",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      icon: "../../../img/glassesImage/v2.png",
      duongDanHinhAnh: "../../../img/glassesImage/v2.png",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      icon: "../../../img/glassesImage/v3.png",
      duongDanHinhAnh: "../../../img/glassesImage/v3.png",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      icon: "../../../img/glassesImage/v4.png",
      duongDanHinhAnh: "../../../img/glassesImage/v4.png",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      icon: "../../../img/glassesImage/v5.png",
      duongDanHinhAnh: "../../../img/glassesImage/v5.png",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      icon: "../../../img/glassesImage/v6.png",
      duongDanHinhAnh: "../../../img/glassesImage/v6.png",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      icon: "../../../img/glassesImage/v7.png",
      duongDanHinhAnh: "../../../img/glassesImage/v7.png",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      icon: "../../../img/glassesImage/v8.png",
      duongDanHinhAnh: "../../../img/glassesImage/v8.png",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      icon: "../../../img/glassesImage/v9.png",
      duongDanHinhAnh: "../../../img/glassesImage/v9.png",
    },
  ];
  // console.log(arrButton2);
  // const [urlXeHoi, setUrlXeHoi] = useState("../../../img/glassesImage/g1.jpg");
  const [urlGlass, setUrlGlass] = useState(arrButton2[0]);
  console.log(urlGlass);
  //   let arrJsx = [<button></button>];
  return (
    <div className="container">
      <div className=" container">
        <h2>TRY GLASSES APP ONLINE</h2>
        <img
          className="bg-center overlay-image"
          src="../../../img/glassesImage/background.jpg"
          alt=""
        />
        <div className="flex space-x-8">
          {/* <img
            className="flex w-50 h-80"
            // className="bg-contain"
            src="./img/glassesImage/model.jpg"
          
            alt=""
          /> */}

          {/* <div className="flex space-x-8"> */}
          <div className="w-36">
            <img
              className="flex w-50 h-80"
              src="./img/glassesImage/model.jpg"
              alt=""
            />
            <img
              src={urlGlass}
              className="absolute left-1/6 w-1/12 transform -translate-x-1/8 -translate-y-1/4 h-30"
              // style={{ top: "32%", left: "50%", width: "40%" }}
              alt=""
            />
          </div>
          <div className=" w-10/12 space-y-2">
            {arrButton2.map((item, index) => {
              console.log(item);
              return (
                <button
                  key={index}
                  className=" items-center border py-2 px-14 rounded w-52 border-gray-500 border-1"
                  onClick={() => {
                    setUrlGlass(item.duongDanHinhAnh);
                  }}
                >
                  <img src={item.icon} alt="" />
                  {item.name}
                  <span className="ml-2 text-xl"></span>
                </button>
              );
            })}
            {/* <button>Crystall Black</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glass;
