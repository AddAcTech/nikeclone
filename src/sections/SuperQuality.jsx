import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          Te brindamos
          <span className="text-coral-red"> calzado </span>
          <span className="text-coral-red">espectacular </span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Garantizando una comodidad y un estilo de primera calidad, nuestro
          calzado meticulosamente elaborado está diseñado para elevar su
          experiencia, brindándole una calidad, innovación y un toque de
          elegancia inigualables.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Nuestra dedicación al detalle y la excelencia garantiza su
          satisfacción.
        </p>
        <div className="mt-11">
          <Button label="Más detalles" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
