import Flexbox from './components/Flexbox'
import BenefitsCard from './components/BenefitsCard'
import CTAbutton from './components/CTAbutton'
import {useState} from 'react'



function App() {
  const [accordionItemSelected, setAccordionItemSelected] = useState(-1);
  const handleAccordionItemClick = (value: number) => {
  if (accordionItemSelected === value){
    setAccordionItemSelected(-1);
  } else {
    setAccordionItemSelected(value);
  }
  
    
  }


  return (
    <>
      <div>
        <div className="d-flex p-2 flex-row-reverse">
        <CTAbutton>
          Saiba mais
        </CTAbutton>

        <CTAbutton>
          Contratar
        </CTAbutton>
        </div>
        <div> <Flexbox> Mais internet, benefícios e bônus para apps </Flexbox> </div>
      
        <img width="100%" height="263" src="image.png" className="img-rounded mx-auto d-block" alt="..."/>


        <div className="d-flex p-2">
          <h2> 5GB bônus para redes sociais e apps </h2>
          <img src="facebook.svg" className="rounded" alt="..."/>
          <img src="tiktok.svg" className="rounded" alt="..."/>        
          <img src="x.svg" className="rounded" alt="..."/>      
          <img src="instagram.svg" className="rounded" alt="..."/>  
          <img src="youtube.svg" className="rounded" alt="..."/>        
          <img src="chatGPT.svg" className="rounded" alt="..."/>
        </div>

        <div className="d-flex p-2">
          <h2> Serviços digitais </h2>
          <img width="50" height="50" src="claro banca.png" className="mx-1 rounded" alt="..."/>
          <img width="50" height="50" src="claro tv+.png" className="mx-1 rounded" alt="..."/>
          <img width="50" height="50" src="skeelo.png" className="mx-1 rounded" alt="..."/>        
        </div>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button onClick= {()=>{handleAccordionItemClick(0)}}className={accordionItemSelected === 0 ? "accordion-button":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Whatsapp ilimitado
              </button>
            </h2>
            <div id="collapseOne" className={"accordion-collapse collapse "+ (accordionItemSelected === 0 ? "show":"")} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Com ligação de voz e vídeos sem descontar da sua franquia, enquanto sua franquia principal estiver ativa. Fique sempre conectado com os amigos e família. O benefício não contempla a função acesso a links. 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button onClick= {()=>{handleAccordionItemClick(1)}} className={accordionItemSelected === 1 ? "accordion-button":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Ligações ilimitadas
              </button>
            </h2>
            <div id="collapseTwo" className={"accordion-collapse collapse "+ (accordionItemSelected === 1 ? "show":"")} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Para qualquer operadora usando o <strong>21</strong>. Na Claro, as ligações são ilimitadas para fixo e celular de qualquer operadora do Brasil, incluindo celulares Claro e telefone fixo Claro e Claro net fone, usando o 21. Também tem ligações ilimitadas para números especiais (exceto 0300 e 0500) e números de três dígitos.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button onClick= {()=>{handleAccordionItemClick(2)}} className={accordionItemSelected === 2 ? "accordion-button":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Roaming Nacional
              </button>
            </h2>
            <div id="collapseThree" className={"accordion-collapse collapse "+ (accordionItemSelected === 2 ? "show":"")} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Com isenção das chamadas recebidas em viagem (fora do seu Estado), elas não serão cobradas e nem descontadas do seu plano. Não há custos extras em roaming nacional na área de cobertura da Claro.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button onClick= {()=>{handleAccordionItemClick(3)}} className={accordionItemSelected === 3 ? "accordion-button":"accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                SMS ilimitado
              </button>
            </h2>
            <div id="collapseFour" className={"accordion-collapse collapse "+ (accordionItemSelected === 3 ? "show":"")} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Para uso não comercial
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
