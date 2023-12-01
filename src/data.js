import rym from "./img/rym.jpg"
import food from "./img/food.jpg"
import henryshop from "./img/henryshop.jpeg"

export default [
   {
      id: 1,
      title: 'Rick and Morty',
      subtitle:"Api Rick and Morty",
      miniatura: rym,
      video:'https://www.youtube.com/watch?v=xKrd-H1tNQE&t=2s',
      proyect:"https://github.com/rogerrodrigoarrossagaray/rick_and_morty",
      description:"Mi aplicación React utiliza una API para explorar y descubrir personajes de una serie. Puedes buscar detalles por ID, agregarlos a tu lista de favoritos, editar su información y eliminarlos. Una experiencia completa para fanáticos de la serie." 
   },
   {
      id: 2,
      title: ' Food App',
      subtitle:"PI Food App",
      miniatura: food,
      video: 'https://www.youtube.com/watch?v=_X6UNnIENLk',
      proyect: "https://github.com/rogerrodrigoarrossagaray/PI-Food-RogerArrossagaray",
      description:"Desarrollé una aplicación que consume una API de recetas y dietas, almacenando los datos en una base de datos. Los usuarios pueden explorar recetas, dietas, crear recetas personalizadas y aplicar filtros para una experiencia culinaria personalizada" 
   },
   {
      id: 3,
      title: 'Henry Shop',
      subtitle:" Henry Shop",
      miniatura: henryshop,
      video: 'https://pf-henry-pt13b-grupo7.vercel.app/',
      proyect: "https://github.com/rogerrodrigoarrossagaray/PF-HENRY-pt13b-grupo7",
      description:"En equipo, desarrollamos una tienda en línea única, con productos personalizados con el logo de Henry. La aplicación incluye pasarela de pagos, sistema de reseñas en React, autenticación con Google y un sistema de calificación de productos. También creamos un panel de control para administradores que permite gestionar productos, categorías y usuarios. Una experiencia de compra innovadora y completa." 
   },
];
