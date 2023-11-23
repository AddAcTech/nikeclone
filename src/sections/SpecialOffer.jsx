import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Oferta </span>
          Especial
        </h2>
        <p className="mt-4 info-text">
          Embárcate en un viaje de compras que redefine tu experiencia con
          ofertas inmejorables. Desde selecciones de primer nivel hasta ahorros
          increíbles, ofrecemos un valor incomparable que nos distingue.
        </p>
        <p className="mt-6 info-text">
          Navegue por un reino de posibilidades diseñadas para satisfacer sus
          necesidades únicas. deseos, superando las expectativas más elevadas.
          Su viaje con nosotros es Nada menos que excepcional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Comprar!" iconURL={arrowRight} />
          <Button
            label="Conocer más"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
