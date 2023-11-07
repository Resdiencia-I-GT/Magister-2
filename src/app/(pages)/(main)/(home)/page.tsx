import schedule_mock from "@/mock/home";
import Wrapper from "@/components/main/home/wrapper";
import Grade from "@/components/main/home/grade";

export default function Home() {

  return (
    <>
      <div className="banner">
        <img src="/images/BANNER_MAGISTER_HORARIO_DAAF_2023.gif" alt="" />
      </div>
      <div className="institucional">
        <div className="alunos">
          {schedule_mock.map((item) => 
            <Wrapper
              title={item.title}
              contentList={item.contentList}
            />
          )}
          <div className="agenda">
            <p>Agenda</p>
            <h1>• ME Laboratório de Programação (02/10)</h1>
            <h1>• ME Banco de Dados (05/10)</h1>
            <h1>• PROVA Segurança da Informação (10/10)</h1>
            <h1>• PROVA Rsidência em Software (10/10)</h1>
            <h1>• ME WEB-Front End (16/10)</h1>
          </div>
          
          <Grade />

        </div>
        <div className="avisos">
          <div className="noticia">
            <h2>20/10/2023</h2>
            <p>Universidade Anuncia Calendário Acadêmico de 2024</p>
            <h1>Datas importantes para o próximo ano letivo divulgadas.</h1>
          </div>
          <div className="noticia">
            <h2>03/10/2023</h2>
            <p>Conferência Internacional de Ciências Sociais 2023</p>
            <h1>Pesquisadores de renome mundial se reúnem em novembro.</h1>
          </div>
          <div className="noticia">
            <h2>10/09/2023</h2>
            <p>Seminário de Empreendedorismo para Alunos</p>
            <h1>
              Workshop de três dias para desenvolver habilidades empreendedoras.
            </h1>
          </div>
          <div className="noticia">
            <h2>30/08/2023</h2>
            <p>Semana da Saúde Mental no Campus</p>
            <h1>Eventos e workshops para promover o bem-estar estudantil.</h1>
          </div>
          <div className="noticia">
            <h2>17/07/2023</h2>
            <p>Competição de Robótica Intrauniversitária</p>
            <h1>Equipes de estudantes competem em desafios tecnológicos.</h1>
          </div>
          <div className="noticia">
            <h2>07/06/2023</h2>
            <p>Inscrições Abertas para Programa de Intercâmbio</p>
            <h1>Oportunidade para estudantes explorarem o mundo em 2024.</h1>
          </div>
          <div className="noticia">
            <h2>15/05/2023</h2>
            <p>Feira de Carreiras e Estágios Universitários</p>
            <h1>Oportunidades de carreira e networking para estudantes.</h1>
          </div>
          <div className="noticia">
            <h2>25/04/2023</h2>
            <p>Reitoria Anuncia Programa de Bolsas de Estudo</p>
            <h1>
              Novas bolsas para apoiar estudantes em suas jornadas acadêmicas.
            </h1>
          </div>
          <div className="noticia">
            <h2>12/03/2023</h2>
            <p>Estudo Identifica Impacto da Poluição na Saúde</p>
            <h1>Pesquisa destaca riscos da poluição do ar para a saúde.</h1>
          </div>
          <div className="noticia">
            <h2>05/02/2023</h2>
            <p>Evento Cultural Noturno no Campus</p>
            <h1>Noite de música, dança e arte para toda a comunidade.</h1>
          </div>
        </div>
      </div>
    </>
  );
}
