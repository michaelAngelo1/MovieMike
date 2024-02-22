import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

import { useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import {
//   type Container,
//   type ISourceOptions,
//   MoveDirection,
//   OutMode,
// } from "@tsparticles/engine";
// import { loadSlim } from "@tsparticles/slim";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=23dced82";
export default function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("Avengers");
  }, [])


  // FOR PARTICLES JS
  // const [init, setInit] = useState(false);

  // // this should be run only once per application lifetime
  // useEffect(() => {
  //   initParticlesEngine(async (engine) => {
  //     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //     // starting from v2 you can add only the features you need reducing the bundle size
  //     //await loadAll(engine);
  //     //await loadFull(engine);
  //     await loadSlim(engine);
  //     //await loadBasic(engine);
  //   }).then(() => {
  //     setInit(true);
  //   });
  // }, []);

  // const particlesLoaded = async (container?: Container): Promise<void> => {
  //   console.log(container);
  // };

  // const options: ISourceOptions = useMemo(
  //   () => ({
  //     background: {
  //       color: {
  //         value: "#0d47a1",
  //       },
  //     },
  //     fpsLimit: 120,
  //     interactivity: {
  //       events: {
  //         onClick: {
  //           enable: true,
  //           mode: "push",
  //         },
  //         onHover: {
  //           enable: true,
  //           mode: "repulse",
  //         },
  //       },
  //       modes: {
  //         push: {
  //           quantity: 4,
  //         },
  //         repulse: {
  //           distance: 200,
  //           duration: 0.4,
  //         },
  //       },
  //     },
  //     particles: {
  //       color: {
  //         value: "#ffffff",
  //       },
  //       links: {
  //         color: "#ffffff",
  //         distance: 150,
  //         enable: true,
  //         opacity: 0.5,
  //         width: 1,
  //       },
  //       move: {
  //         direction: MoveDirection.none,
  //         enable: true,
  //         outModes: {
  //           default: OutMode.out,
  //         },
  //         random: false,
  //         speed: 6,
  //         straight: false,
  //       },
  //       number: {
  //         density: {
  //           enable: true,
  //         },
  //         value: 80,
  //       },
  //       opacity: {
  //         value: 0.5,
  //       },
  //       shape: {
  //         type: "circle",
  //       },
  //       size: {
  //         value: { min: 1, max: 5 },
  //       },
  //     },
  //     detectRetina: true,
  //   }),
  //   [],
  // );

  // if (init) {
  //   return (
  //     <Particles
  //       id="tsparticles"
  //       particlesLoaded={particlesLoaded}
  //       options={options}
  //     />
  //   );
  // }
  

  return (
    <div className="app" id="particles-js">
      <h1>MovieMike</h1>

      <div className="search">
        <input 
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value)}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {searchTerm !== "" ? searchMovies(searchTerm) : searchMovies("Avengers")}}/>
      </div>

      <div className="container">
        { 
          movies.length > 0 ?
            movies.map(
              movie => (
                <MovieCard movie={movie}/>
              )
            )
          : (
            <h2>No movies found</h2>
          )
        }
      </div>
      
    </div>
  )
}
