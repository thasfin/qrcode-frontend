import './App.css';

function App() {
  const redirectDiscord = () => {
    window.open('https://discord.gg/pmEVvTf4', '_blank');
  };
  return (
    <section className="app">
      <h1>Bem Vindo</h1>
      <div className="logo" onClick={redirectDiscord}>
        <img src="/logo.svg" alt="Logo Thasfin Community" />
      </div>
      <div className="div-send-url">
        <input type="text" placeholder="Adicione URL" />
        <button type="button">Enviar</button>
      </div>
    </section>
  );
}

export default App;
