import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-slate-200 rounded-lg p-4 flex flex-col shadow-lg">
      <div className="space-y-4 mb-4">
        <h3 className="text-3xl font-bold text-center">{name}</h3>
        <h3 className="text-center">
          <span className="text-5xl">{price}</span>
          <span className="text-xl">$/month</span>
        </h3>
      </div>
      <div className="pl-4 flex-grow">
        {features.map((feature) => (
          <Feature feature={feature}></Feature>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="btn bg-green-500 w-[80%] rounded-3xl text-white font-bold text-xl hover:bg-green-900">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PriceOption;
