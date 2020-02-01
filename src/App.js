import React, { useEffect, useState } from "react";
import api from "./services/api";
import DevForm from "./DevForm/DevForm";
import DevItem from "./DevItem/DevItem";

import "./styles.css";
import "./App.css";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleSubmit(data) {
    const response = await api.post("/devs", data);
    setDevs([...devs, response.data]);
  }

  return (
    <div id="App">
      <aside>
        <DevForm onSubmit={handleSubmit}></DevForm>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}></DevItem>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
