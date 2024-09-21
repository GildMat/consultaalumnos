import logoumg from '../logo/logoumg.png';

function Principal() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
              <a className="nav-link" href="/Buscarestudiante">Consultar Alumno</a>
              <a className="nav-link" href="/CursoForm">Agregar Alumno</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Aquí colocamos la imagen después del menú */}
      <div style={{ width: "30%", height: "80%", position: "relative", marginTop: "50px" }}>
        <img 
          src={logoumg} 
          alt="Logo UMG" 
          style={{ 
            width: "260px", 
            height: "200px", 
            position: "absolute", 
            top: 0, 
            right: -350 
          }} 
        />
      </div>
    </>
  );
}

export default Principal;
