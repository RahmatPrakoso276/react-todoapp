import React, { useState } from "react";

export default function Hooks1() {
  const [greetings, setGreetings] = useState("Halo Selamat Datang!!");
  const [inputs, setInputs] = useState(true);
  function handleClick() {
    setInputs(!inputs);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setGreetings(e.target.value);
  }
  
  return (
    <div>
      <h1>input greetings!!!</h1>
      <input
        onChange={handleChange}
        type="text"
        className="border border-black my-2"
      />
      <div>{greetings}</div>
      <button
        onClick={handleClick}
        className="block border border-black rounded px-3 py-2"
      >
        klik saya!
      </button>
      <h1>Pesan : {inputs? "Show" : "noShow :D"}</h1>
      {inputs ? <p>{greetings}</p> : null}

    </div>
  );
}
