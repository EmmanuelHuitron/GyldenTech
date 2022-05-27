import { useEffect, useState } from "react";


export default function Carousel(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);
  const [loaded, setLoaded] = useState(false);
  const text = [
    "Casos-de-exito_Nadro.png", "Casos-de-exito_Modelorama.png", "Casos-de-exito_Ekt.png", "Casos-de-exito_Xiaomi.png", "Casos-de-exito_LaMarina.png", "Casos-de-exito_Essity.png"
  ]
  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, props.images);
      }, 4000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (index, images, next=true,) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
      const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };
  const handleClick = (index) => {
    setSelectedImage(props.images[index])
    setSelectedIndex(index);
  }
  const previous = () => {
    selectNewImage(selectedIndex, props.images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, props.images);
  };
  return (
    <>
    <div className="logos-enterprises">
      <div className="img-content" onClick={()=>handleClick(0)}><img src={require(`../../img/Logo_Nandro.png`)} alt="carrusel" style={{maxWidth:"154px"}} /><div className={selectedImage===text[0]? "img-select selected":"img-select"}></div></div>
      <div className="img-content" onClick={()=>handleClick(1)}><img src={require(`../../img/ModeloramaNow.png`)} alt="carrusel" style={{maxWidth:"155px"}} /><div className={selectedImage===text[1]? "img-select selected":"img-select"}></div></div>
      <div className="img-content" onClick={()=>handleClick(2)}><img src={require(`../../img/elektra.png`)} alt="carrusel" style={{maxWidth:"169px"}}  /><div className={selectedImage===text[2]? "img-select selected":"img-select"}></div></div>
      <div className="img-content" onClick={()=>handleClick(3)}><img src={require(`../../img/Xiaomi.png`)} alt="carrusel" style={{maxWidth:"192px"}}  /><div className={selectedImage===text[3]? "img-select selected":"img-select"}></div></div>
      <div className="img-content" onClick={()=>handleClick(4)}><img src={require(`../../img/la marina.png`)} alt="carrusel" style={{maxWidth:"174px"}}  /><div className={selectedImage===text[4]? "img-select selected":"img-select"}></div></div>
      <div className="img-content" onClick={()=>handleClick(5)}><img src={require(`../../img/essity.png`)} alt="carrusel" style={{maxWidth:"158px"}}  /><div className={selectedImage===text[5]? "img-select selected":"img-select"}></div></div>
    </div>
    <div className={loaded ? "sec-carrousel loaded" : "sec-carrousel"} onLoad={() => setLoaded(true)}>
        <div className="sec-left"><img src={require(`../../img/${selectedImage}`)} alt="carrusel" style={{maxWidth:"600px", width:"100%"}} /></div>
        {
          selectedImage===text[0]? (
            <div className="sec-right">
              <h3>Nadro</h3>
              <p>Lanzamiento del sitio web B2B. Más de 20,000 clientes, diferentes listas de precios por mostrador/sucursal, usuarios para compras múltiples, precios e inventario real time, diferentes entregas (same day, next day, entrega nocturna).</p>
              <a href="https://i22.nadro.mx">i22.nadro.mx</a>
            </div>
          ) : selectedImage===text[1]? (
            <div className="sec-right">
              <h3>Modelorama</h3>
              <p>Lanzamiento del sitio web B2B. Más de 20,000 clientes, diferentes listas de precios por mostrador/sucursal, usuarios para compras múltiples, precios e inventario real time, diferentes entregas (same day, next day, entrega nocturna).</p>
              <a href="https://i22.nadro.mx">i22.nadro.mx</a>
            </div>
          ): selectedImage===text[2]?(
            <div className="sec-right">
              <h3>Elektra</h3>
              <p>Lanzamiento del sitio web B2B. Más de 20,000 clientes, diferentes listas de precios por mostrador/sucursal, usuarios para compras múltiples, precios e inventario real time, diferentes entregas (same day, next day, entrega nocturna).</p>
              <a href="https://i22.nadro.mx">i22.nadro.mx</a>
            </div>
          ): selectedImage===text[3]? (
            <div className="sec-right">
              <h3>Xiaomi</h3>
              <p>Lanzamiento del sitio web B2B. Más de 20,000 clientes, diferentes listas de precios por mostrador/sucursal, usuarios para compras múltiples, precios e inventario real time, diferentes entregas (same day, next day, entrega nocturna).</p>
              <a href="https://i22.nadro.mx">i22.nadro.mx</a>
            </div>
          ): selectedImage===text[4]? (
            <div className="sec-right">
              <h3>La Marina</h3>
              <p>Lanzamiento del sitio web B2B. Más de 20,000 clientes, diferentes listas de precios por mostrador/sucursal, usuarios para compras múltiples, precios e inventario real time, diferentes entregas (same day, next day, entrega nocturna).</p>
              <a href="https://i22.nadro.mx">i22.nadro.mx</a>
            </div>
          ): selectedImage===text[5]? (
            <div className="sec-right">
              <h3>ESSITY</h3>
              <p>Lanzamiento del sitio web B2B. Más de 20,000 clientes, diferentes listas de precios por mostrador/sucursal, usuarios para compras múltiples, precios e inventario real time, diferentes entregas (same day, next day, entrega nocturna).</p>
              <a href="https://i22.nadro.mx">i22.nadro.mx</a>
            </div>
          ): (
            <></>
          )
        }
        <div className="sec-buttons">
          {props.showButtons ? (
              <>
              <button onClick={previous}><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.3333 28L2.59033 14.726L15.3333 1.99703" stroke="white" strokeWidth="3" strokeMiterlimit="10"/>
              </svg></button>
              <button onClick={next}><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.66663 2L14.4096 15.274L1.66663 28.003" stroke="white" strokeWidth="3" strokeMiterlimit="10"/>
              </svg>
              </button>
              </>
          ) : (
              <></>
          )}
        </div>
    </div>
    
    <div className="dots-carrusel">
        <div className={selectedImage===text[0]? "dot dot-selected":"dot"} onClick={()=>handleClick(0)}></div>
        <div className={selectedImage===text[1]? "dot dot-selected":"dot"} onClick={()=>handleClick(1)}></div>
        <div className={selectedImage===text[2]? "dot dot-selected":"dot"} onClick={()=>handleClick(2)}></div>
        <div className={selectedImage===text[3]? "dot dot-selected":"dot"} onClick={()=>handleClick(3)}></div>
        <div className={selectedImage===text[4]? "dot dot-selected":"dot"} onClick={()=>handleClick(4)}></div>
        <div className={selectedImage===text[5]? "dot dot-selected":"dot"} onClick={()=>handleClick(5)}></div>
    </div>
    </>
  );
}