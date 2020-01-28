import React from "react";
import "./styles.css";
import "./App.css";
import "./Sidebar.css";

function App() {
  return (
    <div id="App">
      <aside>
        <strong>Cadastrar</strong>

        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username"></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs"></input>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude"></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude"></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/29779597?s=460&v=4"
                alt="Sidnei Junior Anastácio"
              />
              <div className="user-info">
                <strong>Sidnei Junior Anastácio</strong>
                <span>Angular</span>
              </div>
            </header>
            <p>Juninho inho bio</p>
            <a href="https://github.com/sidneiju">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/29779597?s=460&v=4"
                alt="Sidnei Junior Anastácio"
              />
              <div className="user-info">
                <strong>Sidnei Junior Anastácio</strong>
                <span>Angular</span>
              </div>
            </header>
            <p>Juninho inho bio</p>
            <a href="https://github.com/sidneiju">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/29779597?s=460&v=4"
                alt="Sidnei Junior Anastácio"
              />
              <div className="user-info">
                <strong>Sidnei Junior Anastácio</strong>
                <span>Angular</span>
              </div>
            </header>
            <p>Juninho inho bio</p>
            <a href="https://github.com/sidneiju">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars3.githubusercontent.com/u/29779597?s=460&v=4"
                alt="Sidnei Junior Anastácio"
              />
              <div className="user-info">
                <strong>Sidnei Junior Anastácio</strong>
                <span>Angular</span>
              </div>
            </header>
            <p>Juninho inho bio</p>
            <a href="https://github.com/sidneiju">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
