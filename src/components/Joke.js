import React, { useState } from "react";

export default function Joke() {
  const [unos, setUnos] = useState("");
  const [ukupno, setUkupno] = useState(0);

  const dodajLitre = (e) => {
    e.preventDefault();
    const litara = parseFloat(unos);

    if (!isNaN(litara) && litara > 0) {
      const zbroj = ukupno + litara / 1000;

      if (zbroj <= 2) {
        setUkupno(zbroj);
      } else {
        zbroj === 2;
      }
      setUnos("");
    }
  };
  const Resetbtn = () => {
    setUkupno(0);
  };
  return (
    <div className="container">
      <h2>Water Intake Tracker</h2>
      <div style={{ marginTop: "12px", marginBottom: "12px" }}>
        Daily Goal: 2L
      </div>
      <div className="con-bar">
        <div
          style={{
            width: `${(ukupno / 2) * 100}%`,
            backgroundColor: "rgb(0,0,250)",
            height: "100%",
            borderRadius: "10px",
          }}
        />
      </div>

      <div>{ukupno.toFixed(1)} / 2L</div>
      <form onSubmit={dodajLitre}>
        <input
          className="inp"
          type="number"
          step="0.1"
          value={unos}
          onChange={(e) => setUnos(e.target.value)}
          placeholder="Amount(ml)"
        />
        <button type="submit" className="sub-btn">
          Log Intake
        </button>
        <button className="res-btn" onClick={Resetbtn}>
          Reset Intake
        </button>
      </form>
    </div>
  );
}
