"use client";
import { useState } from "react";
import random from "random";

export default function MainComp() {
  const [clientName, setClientName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [samplesAmount, setSamplesAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(0);
  var randomNumbers = [];

  // changing clientx to clientName
  // changing taskx to taskName
  // changing samplesx to samplesAmount

  const handletaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handlesamplesAmountChange = (event) => {
    setSamplesAmount(event.target.value);
  };

  const handleClientNameChange = (event) => {
    setClientName(event.target.value);
  };

  const handleMaxAmountChange = (event) => {
    setMaxAmount(event.target.value);
  };

  const createDivs = () => {
    var divs = [];

    for (let i = 0; i < samplesAmount; i++) {
      // the amount inside the div is a random number between 0 and maxAmount
      // the amount should not be a repeated number inside of randomNumbers array

      var random_try = random.int(0, parseInt(maxAmount));

      while (randomNumbers.includes(random_try)) {
        random_try = random.int(0, parseInt(maxAmount));
      }

      randomNumbers.push(random_try);

      divs.push(
        <div id={clientName + i} className={taskName + i} key={random_try}>
          {random_try}
        </div>
      );
    }
    // alert(samplesAmount);
    return divs.map((div) => div);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <label
        htmlFor="client-name"
        onChange={handleClientNameChange}
        value={clientName}
        className="text-white"
      >
        Client Name{" "}
      </label>
      <input type="text" name="" id="client-name" className="text-black" />
      <label htmlFor="task-name" className="text-white">
        Task Name{" "}
      </label>
      <input type="text" name="" id="task-name" className="text-black" />

      <label htmlFor="max-amount" className="text-white">
        Max Range:{" "}
      </label>
      <input
        type="number"
        name=""
        id="max-amount"
        className="text-black"
        onChange={handleMaxAmountChange}
      />

      <label htmlFor="samples-amount" className="text-white">
        Amount of samples{" "}
      </label>
      <input
        type="number"
        name=""
        id="samples-amount"
        className="text-black"
        onChange={handlesamplesAmountChange}
      />

      <h1 className="mt-5">SEQUENCE 1</h1>

      <div className="grid grid-cols-5 grid-rows-5 gap-4">{createDivs()}</div>

      <h1 className="mt-5">SEQUENCE 2</h1>

      <div className="grid grid-cols-5 grid-rows-5 gap-4">{createDivs()}</div>
    </main>
  );
}
