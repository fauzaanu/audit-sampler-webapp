"use client";
import { useState, useEffect } from "react";
import random from "random";
import { useRef } from "react";

export default function Home() {
  const sectionRef = useRef(null);
  const [clientName, setClientName] = useState("");
  const [taskName, setTaskName] = useState("");
  const [samplesAmount, setSamplesAmount] = useState(0);
  const [maxAmount, setMaxAmount] = useState(0);

  var randomNumbers = [];

  const handlesamplesAmountChange = (event) => {
    if (event.target.value <= maxAmount / 2) {
      setSamplesAmount(event.target.value);
    } else {
      // chnage the input to the max amount / 2 forcefully
      setSamplesAmount(maxAmount / 2);
    }
  };

  const createDivs = () => {
    var divs = [];

    for (let i = 0; i < samplesAmount; i++) {
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
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="p-4">AUDIT SAMPLER</h1>

        <div className="card">
          {/* Client Name */}
          <div className="place-items-end">
            <label
              htmlFor="client-name"
              onChange={(e) => {
                setClientName(e.target.value);
              }}
              value={clientName}
            >
              Client Name{" "}
            </label>

            <input
              type="text"
              name=""
              id="client-name"
              className="text-black"
            />
          </div>

          {/* Task Name */}
          <div className="place-items-end">
            <label htmlFor="task-name">Task Name </label>
            <input type="text" name="" id="task-name" className="text-black" />
          </div>

          {/* Max Range */}
          <div>
            <label htmlFor="max-amount">Max Range </label>
            <input
              type="number"
              name=""
              id="max-amount"
              className="text-black"
              min={0}
              onChange={(e) => {
                console.log(e);
                if (e.target.value > 0) {
                  sectionRef.current.style.display = "block";
                } else {
                  sectionRef.current.style.display = "none";
                }
                setMaxAmount(e.target.value);
              }}
            />
          </div>

          {/* Samples Amount */}
          <div ref={sectionRef} style={{ display: "none" }}>
            <label htmlFor="samples-amount" className=" amount_of_samples">
              Amount of samples{" "}
            </label>
            <input
              type="number"
              name=""
              id="samples-amount"
              className="text-black amount_of_samples"
              onChange={handlesamplesAmountChange}
              min={0}
              max={maxAmount / 2}
            />
          </div>
        </div>

        <h1 className="mt-5">SEQUENCE 1</h1>
        <div className="sq1 grid grid-cols-5 grid-rows-5 gap-4">
          {createDivs()}
        </div>

        <h1 className="mt-5">SEQUENCE 2</h1>
        <div className="sq2 grid grid-cols-5 grid-rows-5 gap-4">
          {createDivs()}
        </div>
      </main>
    </>
  );
}
