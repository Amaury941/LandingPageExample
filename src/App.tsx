import Flexbox from './components/Flexbox'
import BenefitsCard from './components/BenefitsCard'
import AlertComponent from './components/AlertComponent'

function App() {

  return (
    <>
      <div>
        <AlertComponent>Oferta por tempo limitado</AlertComponent>
        <Flexbox> Mais internet, WhatsApp ilimitado e bônus para apps </Flexbox>
        <div className="row justify-content-evenly">

          <BenefitsCard heading="15GB" hasButton buttonMessage='Assinar'> 
          + 10GB Bonus livre
          </BenefitsCard>

          <BenefitsCard heading="20GB" hasButton buttonMessage='Assinar'> 
          + 10GB Bonus livre
          </BenefitsCard>

          <BenefitsCard heading="20GB" hasButton buttonMessage='Assinar'> 
          + 10GB Bonus livre 
          <br/>
          Com Geforce NOW
          </BenefitsCard>        
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
