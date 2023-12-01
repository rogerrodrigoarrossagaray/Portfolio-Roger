import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import pj from "../../img/yocyiber.png"
import Mensaje from "../../components/Mensaje/Mensaje";
import Card from "../../components/Card/Card";
import ProyectCard from "../../components/ProyectCard/ProyectCard";
import data from "../../data"
import CardAbout from "../../components/CardAbout/CardAbout";
import Skills from "../../components/Skils/Skills"
const Home = () => {
  const particlesInit = useCallback(async engine => {
      console.log(engine);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadFull(engine);
      await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  return (
    <div>
    <div className="fixed top-0 left-0 w-full h-full z-[-1]">
      <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
              background: {
                  color: {
                      value: "#000000",
                  },
              },
              fpsLimit: 120,
              interactivity: {
                  events: {
                      onClick: {
                          enable: true,
                          mode: "push",
                      },
                      onHover: {
                          enable: true,
                          mode: "repulse",
                      },
                      resize: true,
                  },
                  modes: {
                      push: {
                          quantity: 4,
                      },
                      repulse: {
                          distance: 200,
                          duration: 0.4,
                      },
                  },
              },
              particles: {
                  color: {
                      value: "#ffffff",
                  },
                  links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                  },
                  move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                          default: "bounce",
                      },
                      random: false,
                      speed: 3,
                      straight: false,
                  },
                  number: {
                      density: {
                          enable: true,
                          area: 800,
                      },
                      value: 80,
                  },
                  opacity: {
                      value: 0.5,
                  },
                  shape: {
                      type: "circle",
                  },
                  size: {
                      value: { min: 1, max: 3 },
                  },
              },
              detectRetina: true,
          }}
      />
      </div>
      <div className="flex items-center justify-center h-screen">
  <Card/>
</div>




<div className="fixed bottom-0 right-0">
  <img
    src={pj}
    alt=""
    className="w-700 h-auto" // Ajusta el tamaño de la imagen aquí
  />
</div>
<div className="fixed top-1/2 right-7 transform -translate-y-1/6">
  <Mensaje />
</div>
<div>
    <CardAbout/>
</div>
<div>
    <Skills/>
</div>
{data.map((proyect)=>{
  return(
    <ProyectCard key={proyect.id} description={proyect.description} miniatura={proyect.miniatura} title={proyect.title} subtitle={proyect.subtitle} video={proyect.video} proyect={proyect.proyect}/>
  )
}) }



      </div>
  );
};

export default Home;
