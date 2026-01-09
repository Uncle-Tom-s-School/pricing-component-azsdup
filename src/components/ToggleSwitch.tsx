type Props = {
  yearly: boolean;
  setYearly: (value: boolean) => void;
};

export default function ToggleSwitch({ yearly, setYearly }: Props) {
  return (
    <div className="toggle">
      <span>Monthly</span>
      <input
        type="checkbox"
        checked={yearly}
        onChange={() => setYearly(!yearly)}
      />
      <span>Yearly</span>
    </div>
  );
}
