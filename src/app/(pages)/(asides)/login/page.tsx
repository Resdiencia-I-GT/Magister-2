  "use client"

  export default function Login() {
    const handleRedirectHome = () => {
      window.location.href = "/"
    }

    return (
      <main>
        <div className="container-fluid" >
              <div className="row "style={{ height: "100vh", backgroundColor:'#007AC5' }}>
                <div className="col-md-5 bg-white rounded d-flex flex-column align-items-center justify-content-center align-items-center h-100 rounded-end-5" >
                  <div className="d-flex align-items-center w-50 ">
                    <img src="/magister-logo.png" alt="logo do magister" className="w-25" />
                    <h1 className="w-75" style={{ fontStyle: 'italic', color: '#666' }}>Magister</h1>
                  </div>
                   {/* Texto abaixo do nome "Magister" */}
                  <div className="text-center"style={{ color: '#999' }}>
                    <p>Bem vindo ao portal Magister.<br/>   Preencha os campos abaixo para prosseguir.</p>
                  </div>
                  {/* Conteúdo do contêiner de login à esquerda */}
                  <div className="d-flex flex-column gap-2 my-3">
                    <input type="text" className="rounded-2 py-1 px-4" placeholder="Matricula" style={{ backgroundColor: '#DDEBF7', border: "1px solid #aaa" }}/>
                    <input type="text" className="rounded-2 py-1 px-4" placeholder="Senha" style={{ backgroundColor: '#DDEBF7', border: "1px solid #aaa" }} />
                  </div>
                  <button onClick={() => handleRedirectHome()} className="entrar"style={{ backgroundColor: '#0D6EFD', color: '#fff', borderRadius: '5px', padding: '5px 20px', fontSize: '16px', border: 'none' }}>
                    Entrar
                    </button> 
                  </div>   
                    {/* Imagem de fundo à direita */}
                    <div className="col-md-7 p-0"style={{ backgroundImage: `url('/reuniao.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }} > 
                    {/* Logo no meio */}
                      <div className="h-100 w-100 d-flex justify-content-center align-items-center" style={{ background: '#007AC5', 
                    opacity: 0.9 }}> 
                        <img src="/grupo_tiradentes.png" alt="Logo" className="w-25 " />
                        <div className="position-absolute bottom-0 mb-4 d-flex justify-content-center m-auto gap-3">
                          <img src="/centro_unit.png" alt="Imagem 1" className="img-small w-25" />
                          <img src="/unit.png" alt="Imagem 1" className="img-small w-25" />
                          <img src="/faculdade.png" alt="Imagem 1" className="img-small w-25" />
                    </div>
                  </div>                               
                </div>
              </div>
            </div>
      </main>
    );
  }
