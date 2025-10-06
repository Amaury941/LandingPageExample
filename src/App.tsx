import Flexbox from './components/Flexbox'
import CTAbutton from './components/CTAbutton'
import BenefitsCard from './components/BenefitsCard'
import { useState } from 'react'

function App() {
  const bonushead = ["1","2","3","4"]
  const bonusbody = ["desc1","desc2","desc3","desc4"]
  const [descr1,setdescr1] = useState(-1); 
  return (
    <>
      <div>
        <Flexbox> Mais internet, WhatsApp ilimitado e bônus para apps </Flexbox>
        <CTAbutton> Assine já </CTAbutton>

        <div className="accordion" id="listaAccordion">
          
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" onClick={()=> setdescr1(descr1 === 0 ? -1 : 0 )} data-bs-toggle="collapsed" data-bs-target="#desc1">
                Item 1
              </button>
            </h2>
            <div id="desc1" className={descr1===0 ? "accordion-collapse collapsed":"accordion-collapse collapse"} data-bs-parent="#listaAccordion">
              <div className="accordion-body">
                Descrição do item 1.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" onClick={()=> setdescr1(descr1 === 1 ? -1 : 1)} data-bs-toggle="collapsed" data-bs-target="#desc2">
                Item 2
              </button>
            </h2>
            <div id="desc2" className={descr1===1 ? "accordion-collapse collapsed":"accordion-collapse collapse"} data-bs-parent="#listaAccordion">
              <div className="accordion-body">
                Descrição do item 2.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" onClick={()=> setdescr1(descr1 === 2 ? -1 : 2)} data-bs-toggle="collapsed" data-bs-target="#desc3">
                Item 3
              </button>
            </h2>
            <div id="desc3" className={descr1===2 ? "accordion-collapse collapsed":"accordion-collapse collapse"} data-bs-parent="#listaAccordion">
              <div className="accordion-body">
                Descrição do item 3.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" onClick={()=> setdescr1(descr1 === 3 ? -1 : 3 )} data-bs-toggle="collapsed" data-bs-target="#desc4">
                Item 4
              </button>
            </h2>
            <div id="desc4" className={descr1===3 ? "accordion-collapse collapsed":"accordion-collapse collapse"} data-bs-parent="#listaAccordion">
              <div className="accordion-body">
                Descrição do item 4.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" onClick={()=> setdescr1(descr1 === 4 ? -1 : 4)} data-bs-toggle="collapsed" data-bs-target="#desc5">
                Item 5
              </button>
            </h2>
            <div id="desc5" className={descr1===4 ? "accordion-collapse collapsed":"accordion-collapse collapse"} data-bs-parent="#listaAccordion">
              <div className="accordion-body">
                Descrição do item 5.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" onClick={()=> setdescr1(descr1 === 5 ? -1 : 5)} data-bs-toggle="collapsed" data-bs-target="#desc6">
                Item 6
              </button>
            </h2>
            <div id="desc6" className={descr1===5 ? "accordion-collapse collapsed":"accordion-collapse collapse"} data-bs-parent="#listaAccordion">
              <div className="accordion-body">
                Descrição do item 6.
              </div>
            </div>
          </div>

        </div>

        <div className="row justify-content-evenly">

          <BenefitsCard heading="whatsapp ilimitado"> 
            com ligação de voz e vídeos sem descontar da sua franquia, enquanto sua franquia principal estiver ativa. Fique sempre conectado com os amigos e família. O benefício não contempla a função acesso a links. 
          </BenefitsCard>

          <BenefitsCard heading="Ligações ilimitadas"> 
            para qualquer operadora usando o 21. Na Claro, as ligações são ilimitadas para fixo e celular de qualquer operadora do Brasil, incluindo celulares Claro e telefone fixo Claro e Claro net fone, usando o 21. Também tem ligações ilimitadas para números especiais (exceto 0300 e 0500) e números de três dígitos.
          </BenefitsCard>

          <BenefitsCard heading="Roaming Nacional"> 
            com isenção das chamadas recebidas em viagem (fora do seu Estado), elas não serão cobradas e nem descontadas do seu plano. Não há custos extras em roaming nacional na área de cobertura da Claro.
          </BenefitsCard>

          <BenefitsCard heading="SMS ilimitado"> 
            Uso não comercial
          </BenefitsCard> 
        
        </div>
        
      </div>
    </>
  )
}

export default App
