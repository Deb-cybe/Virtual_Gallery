import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Gallery } from "./components/Gallery";
import { Search } from "./components/Search";
// import { Toggle } from "./components/Toggle";
import { NotFound } from "./components/NotFound";

AOS.init();

export const AppContext = createContext();

// access key - Jh9rfrzWuZMfv48bWTegRs4m4VUXz0ckpsEIwInXlKg
//access key2 - JLe0bl5rvv-1Qsh79QDZw8VRP_-0kjGMU54kFqvoMRs
//secret key - ZtRf5-d3Pgcxznzj3f4OLxm4wlcdkmWVcBabYcwPP4M
function App() {
  const [result, setResult] = useState([]);
  const [image, setImage] = useState("dog");
  const search = (name, e) => {
    // alert(1);
    // console.log(name);
    e.preventDefault();

    setImage(name);
    // console.log(result);
  };
  let arr = [];

  useEffect(() => {
    test();
  });

  const fetch = (url) => {
    axios.get(url).then((response) => {
      for (let i = 0; i < response.data.results.length; i++) {
        if (
          response.data.results[i].height > 3500 &&
          response.data.results[i].width < 5000
        ) {
          arr[i] = response.data.results[i];
        }
      }
      setResult(arr);
    });
    // .catch(() => console.log(321));
  };
  const test = () => {
    const url =
      "https://api.unsplash.com/search/photos?page=1&per_page=30&query=" +
      image +
      "&client_id=" +
      "Jh9rfrzWuZMfv48bWTegRs4m4VUXz0ckpsEIwInXlKg";

    fetch(url);
  };

  return (
    <>
      <AppContext.Provider value={{ search, result }}>
        {/* <Toggle /> */}
        <div className="container  mx-auto dark">
          <p className="text-center text-lime-300 text-4xl mt-20">
            Virtual Gallery
          </p>
          <hr className="w-32 h-1 mx-auto  bg-gray-100 border-0 rounded my-6 dark:bg-gray-700"></hr>
          <Search />
          {result.length != 0 ? <Gallery /> : <NotFound />}
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
