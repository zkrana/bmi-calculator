import { useState } from "react";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();

    if (weight === "" || height === "") {
      setMessage("Input is Empty!");
    } else {
      const calculatedBmi =
        ((weight * 2.2046) / (height * 12 * (height * 12))) * 703;
      const roundedBmi = calculatedBmi.toFixed(1);
      setBmi(roundedBmi);

      // Check weight is good or bad based on the calculated BMI
      if (calculatedBmi < 18.5) {
        setMessage("You are in underweight");
      } else if (calculatedBmi <= 24.9) {
        setMessage("Your Health is Good.");
      } else {
        setMessage("You are in overweight range");
      }
    }
  };

  // Reset
  const reset = () => {
    setHeight("");
    setWeight("");
    setMessage("");
    setBmi("");
  };

  return (
    <form onSubmit={calcBmi}>
      <div>
        <label htmlFor="weight"> Weight (kg) </label>
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Please input your weight"
        />
      </div>
      <div>
        <label htmlFor="height"> Height (feet) </label>
        <input
          type="number"
          name="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Please input your height"
        />
      </div>
      <div>
        <button type="submit" className="submit">
          Check BMI
        </button>
        <button type="button" className="submit s-outline" onClick={reset}>
          Reset
        </button>
      </div>
      <div>
        <h3 className="bmi-show">
          {bmi !== "" ? `Your BMI Is: ${bmi}` : null}
        </h3>

        <p
          className={`message ${
            weight === "" || height === "" ? "error-message" : ""
          }`}
        >
          {message}
        </p>
      </div>
    </form>
  );
};

export default BmiCalculator;
