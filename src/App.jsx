import React from 'react'
import Testimonios1 from './components/Testimonios1';

function App() {

  const testimon = [
  {
    id: 0,
    imgSrc: "src/assets/carla.jpg",
    name: "Carla Marrero en Suecia",
    trabajo: "Ingenieria en Softgen",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugit iusto? Dolorem libero molestiae incidunt totam, odit hic quaerat. Itaque doloremque illo non ducimus nobis quidem, sint magni velit dolores!",
    alt: "Chica Ingeniera en Suecia "
  },

  {
    id: 1,
    imgSrc: "src/assets/Elena.jpg",
    name: "Elena Perez en EE.UU",
    trabajo: "Ingenieria en Miryad",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugit iusto? Dolorem libero molestiae incidunt totam, odit hic quaerat. Itaque doloremque illo non ducimus nobis quidem, sint magni velit dolores!",
    alt: "Chica Ingeniera en EE.UU "
  },

  {
    id: 2,
    imgSrc: "src/assets/Lucas.jpg",
    name: "Lucas Gonzales en España",
    trabajo: "Ingenieria en Ionos",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugit iusto? Dolorem libero molestiae incidunt totam, odit hic quaerat. Itaque doloremque illo non ducimus nobis quidem, sint magni velit dolores!",
    alt: "Chico Ingeniero en España "
  },

  {
    id: 3,
    imgSrc: "src/assets/Pedro.jpg",
    name: "Pedro Gonzales en Italia",
    trabajo: "Ingenieria en Olivetti",
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, fugit iusto? Dolorem libero molestiae incidunt totam, odit hic quaerat. Itaque doloremque illo non ducimus nobis quidem, sint magni velit dolores!",
    alt: "Chico Ingeniero en Italia "
  },
  ];


  return (
    <>
      <Testimonios1 testimon={testimon} />
    </>
  );
}

export default App

