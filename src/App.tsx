import { useEffect, useState } from "react";
import PriceCard from "./components/PriceCard";
import ToggleSwitch from "./components/ToggleSwitch";

type Plan = {
  id: number;
  title: string;
  price: number;
  description: string;
  storage: string;
  support: string;
  highlighted: boolean;
};

function App() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [yearly, setYearly] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then((data: Plan[]) => setPlans(data));
  }, []);

  return (
    <>
      <ToggleSwitch yearly={yearly} setYearly={setYearly} />

      <div className="pricing-container">
        {plans.map(plan => (
          <PriceCard
            key={plan.id}
            data={plan}
            yearly={yearly}
          />
        ))}
      </div>
    </>
  );
}

export default App;
