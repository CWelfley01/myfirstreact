import React from 'react';

export default function Cat(props) {
  return (
    <div className="cat">
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
}


// var catData;
// var mainContainer = document.querySelector(".main");

// async function getCats() {
//   const catsFetch = await fetch("https://catfact.ninja/breeds");
//   catData = await catsFetch.json();
//   console.log(catData.data);
//   catData.data.forEach((element) => {
//     var catBreed = document.createElement("div");
//     catBreed.textContent = element.breed;
//     mainContainer.appendChild(catBreed);
//   });
// }
// getCats();
// function showMoreInfo() {}