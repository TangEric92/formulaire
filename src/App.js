import React, { useState } from "react";
import "./App.css";

const civiliteOption = ["Madame", "Mademoiselle", "Monsieur"];

function Input(props) {
  return (
    <div>
      <label htmlFor={props.name}>
        {props.label} :
        <input
          onChange={props.onSetChange}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
        />
      </label>
    </div>
  );
}

function App() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [civilite, setCivilite] = useState("");
  const [age, setAge] = useState("");

  const handleNomChange = event => {
    setNom(event.target.value);
  };
  const handlePrenomChange = event => {
    setPrenom(event.target.value);
  };
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleCiviliteChange = event => {
    setCivilite(event.target.value);
  };

  const handleChangeAge = event => {
    setAge(event.target.value);
  };

  const validateForm = event => {
    event.preventDefault();
    if (email.indexOf("@") === -1) {
      setError("Error");
    }
  };
  const listAge = [];
  for (let i = 0; i < 99; i++) {
    listAge.push(i);
  }

  return (
    <div className="App">
      <form onSubmit={validateForm}>
        <label>
          Civilite :
          {civiliteOption.map((choice, index) => {
            return (
              <span>
                <input
                  key={index}
                  type="radio"
                  name="civilite"
                  value={choice}
                  onChange={handleCiviliteChange}
                />
                {choice}
              </span>
            );
          })}
        </label>
        <Input
          label="Nom"
          type="text"
          name="nom"
          value={nom}
          placeholder="nom"
          onSetChange={handleNomChange}
        />
        <Input
          label="Preom"
          type="test"
          name="prenom"
          value={prenom}
          placeholder="prenom"
          onSetChange={handlePrenomChange}
        />
        <label>
          Age :
          <select onChange={handleChangeAge}>
            {listAge.map(age => {
              return <option value={age}> {age} </option>;
            })}
          </select>
        </label>
        <Input
          label="Email"
          type="email"
          name="email"
          value={email}
          placeholder="eric@lereacteur.fr"
          onSetChange={handleEmailChange}
        />
        <Input
          label="Mot de passe"
          type="password"
          name="password"
          value={password}
          placeholder="********"
          onSetChange={handlePasswordChange}
        />{" "}
        <input type="submit" name="Envoyer" />
      </form>
      <div>{error}</div>
    </div>
  );
}

export default App;
