import React, { useState, useEffect } from "react";

import "./DevForm.css";

function DevForm(props) {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const dev = {
      github_username,
      techs,
      latitude,
      longitude
    };

    setGithubUsername("");
    setTechs("");
    await props.onSubmit(dev);
  }

  return (
    <>
      <strong>Cadastrar</strong>

      <form onSubmit={e => handleSubmit(e)}>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input
            name="github_username"
            id="github_username"
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
          ></input>
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input
            name="techs"
            id="techs"
            value={techs}
            onChange={e => setTechs(e.target.value)}
          ></input>
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input
              name="latitude"
              id="latitude"
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
            ></input>
          </div>
          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input
              name="longitude"
              id="longitude"
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
            ></input>
          </div>
        </div>

        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default DevForm;
