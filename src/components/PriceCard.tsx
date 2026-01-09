type CardData = {
  title: string;
  price: number;
  description: string;
  storage: string;
  support: string;
  highlighted: boolean;
};

type Props = {
  data: CardData;
  yearly: boolean;
};

export default function PriceCard({ data, yearly }: Props) {
  const priceNumber = Number(data.price);

  const calculatedPrice =
    yearly && priceNumber !== 0
      ? (priceNumber * 11).toFixed(2)
      : priceNumber.toFixed(2);

  return (
    <div className={`card ${data.highlighted ? "highlighted" : ""}`}>
      <h3>{data.title}</h3>

      <h2>
        {priceNumber === 0 ? "Free" : `$${calculatedPrice}`}
      </h2>

      {yearly && priceNumber !== 0 && <p>/ year</p>}

      <p>{data.description}</p>
      <p>{data.storage}</p>
      <p>{data.support}</p>

      <button>Try for Free</button>
    </div>
  );
}
