const handleMouse = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const mouseDiv = document.querySelector("#mouseDiv");
  mouseDiv.textContent = `kordinatebi x ${x} y ${y}`;
};

const debaunce = (time, foo) => {
  let timeOut;
  return (...args) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      foo(...args);
    }, time);
  };
};

const mouseFooValue = debaunce(300, handleMouse);
document.addEventListener("mousemove", mouseFooValue);

const input = document.querySelector("input");
const infoDiv = document.querySelector(".infoDiv");

const handleInput = async (e) => {
  try {
    const filterKey = "username";
    const value = e.target.value;
    const rawData = await fetch(
      `https://jsonplaceholder.typicode.com/users?${filterKey}=${value}`
    );
    const data = await rawData.json();
    console.log(data);
    data.map((item) => {
      infoDiv.innerHTML = `
      <h1>name:${item.name}<h1/>
     <h1> city:${item.address.city}<h1/>
      `;
    });
  } catch (error) {
    console.log("error");
  }
};

const inputFooValue = debaunce(400, handleInput);
input.addEventListener("input", inputFooValue);
