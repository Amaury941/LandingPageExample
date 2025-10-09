import Flexbox from './components/Flexbox'
import BenefitsCard from './components/BenefitsCard'
import CTAbutton from './components/CTAbutton'

function App() {
  return (
    <>
      <div>
        <div className="d-flex p-2 flex-row-reverse text-bg-danger p-2">
        <CTAbutton>
          Saiba mais
        </CTAbutton>

        <CTAbutton>
          Contratar
        </CTAbutton>
        </div>
      
        <img width="100%" height="263" src="image.png" className="img-rounded mx-auto d-block" alt="..."/>


        <div className='d-flex p-5 justify-content-evenly'>
          <div className='d-flex p-2'>
            <BenefitsCard heading='15GB' hasButton buttonMessage='contratar'> <strong>R$ 59,90</strong><br></br> </BenefitsCard>
            <BenefitsCard heading='20GB' hasButton buttonMessage='contratar'> <strong>R$ 69,90</strong><br></br> </BenefitsCard>
            <BenefitsCard heading='20GB' hasButton buttonMessage='contratar'> <strong>R$ 99,90</strong><br></br> + Geforce Now </BenefitsCard>
          </div>

          <div> 
          <Flexbox> Planos de celular Controle</Flexbox>
          <p className='text-center'>
            <strong> Mais internet, benefícios e bônus para apps </strong>
          </p>
        </div>
          
          <div>
            <div className="d-flex p-2 flex-row-reverse">
              <img width="25" height="25" src="whatsapp.svg" className="rounded" alt="..."/>
              <p> Whatsapp ilimitado </p>
            </div>
            
            <div className="d-flex p-2 flex-row-reverse">
              <img width="25" height="25" src="telephone.png" className="rounded" alt="..."/>
              <p> Ligações e SMS ilimitados </p>
            </div>
            
            <div className="d-flex p-2 flex-row-reverse">
              <img width="25" height="25" src="facebook.svg" className="rounded" alt="..."/>
              <img width="25" height="25" src="tiktok.svg" className="rounded" alt="..."/>        
              <img width="25" height="25" src="x.svg" className="rounded" alt="..."/>      
              <img width="25" height="25" src="instagram.svg" className="rounded" alt="..."/>  
              <img width="25" height="25" src="youtube.svg" className="rounded" alt="..."/>        
              <img width="25" height="25" src="chatGPT.svg" className="rounded" alt="..."/>
              <p> 5GB de bônus para apps </p>
            </div>



            <div className="d-flex p-2 flex-row-reverse">
              <img width="25" height="25" src="claro banca.png" className="mx-1 rounded" alt="..."/>
              <img width="25" height="25" src="claro tv+.png" className="mx-1 rounded" alt="..."/>
              <img width="25" height="25" src="skeelo.png" className="mx-1 rounded" alt="..."/>        
              <p> Serviços digitais </p> 
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
