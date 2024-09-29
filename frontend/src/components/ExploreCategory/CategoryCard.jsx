import React from "react";

function CategoryCard({ imgSrc, text, value, setCategorySelected}) {
  return (
    <div 
    onClick={()=>{setCategorySelected(value)}}
    className="h-[180px] w-[100px] md:h-[250px] md:w-[200px] bg-secondary shadow-md rounded-lg cursor-pointer transition hover:scale-105">
      <div className="h-3/4 w-full flex justify-center items-center p-2 md:p-5">
        <img src={imgSrc} alt="image" width={500} height={500} />
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <p className="font-medium font-Raleway text-center text-thirdColor pb-2 h-1/4 text-sm flex-wrap">
          {text}
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
