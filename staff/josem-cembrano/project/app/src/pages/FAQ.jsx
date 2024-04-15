import React, { useState } from 'react';
import { LuDog } from "react-icons/lu";

export default function FAQ () {
  const [openPanel, setOpenPanel] = useState(null);

  const handleClick = (panelId) => {
    setOpenPanel(openPanel === panelId ? null : panelId);
  }

  return (
    <div className='w-screen h-full flex flex-row justify-center pb-28'>
      <div className=' h-fit myfont faq-container text-gray-700 font-bold bg-white shadow-custom rounded-lg mt-5 mr-10'style={{ paddiongBottom: '10px' }}>
        <div className="faq-header text-yellow-600" style={{ textAlign: 'center', fontSize: '35px' }}>Frequently Asked Questions</div>
        <div className="faq-content">
          <div className="faq-question">
            <input id="q1" type="checkbox" className="panel" />
            <div className={`plus ${openPanel === 'q1' ? 'clicked' : ''}`} onClick={() => handleClick('q2')}><LuDog /></div>
            <label htmlFor="q1" className="panel-title">¿Cuál es el tamaño promedio de un Alaska Malamute?</label>
            <div className="panel-content text-yellow-600">Los machos suelen pesar entre 85 y 100 libras, mientras que las hembras pesan entre 75 y 85 libras.</div>
          </div>

          <div className="faq-question">
            <input id="q2" type="checkbox" className="panel" />
            <div className={`plus ${openPanel === 'q2' ? 'clicked' : ''}`} onClick={() => handleClick('q2')}><LuDog /></div>
            <label htmlFor="q2" className="panel-title">¿Cuál es la esperanza de vida típica de un Alaska Malamute?</label>
            <div className="panel-content panel-content text-yellow-600">Por lo general, viven entre 10 y 14 años.</div>
          </div>

          <div className="faq-question">
            <input id="q3" type="checkbox" className="panel" />
            <div className={`plus ${openPanel === 'q3' ? 'clicked' : ''}`} onClick={() => handleClick('q3')}><LuDog /></div>
            <label htmlFor="q3" className="panel-title">¿Cómo es el pelaje de un Alaska Malamute?</label>
            <div className="panel-content panel-content text-yellow-600">Tienen un pelaje denso y doble que les ayuda a mantenerse calientes en climas fríos.</div>
          </div>

          <div className="faq-question">
            <input id="q4" type="checkbox" className="panel" />
            <div className={`plus ${openPanel === 'q4' ? 'clicked' : ''}`} onClick={() => handleClick('q4')}><LuDog /></div>
            <label htmlFor="q4" className="panel-title">¿Son los Alaska Malamutes adecuados para vivir en climas cálidos?</label>
            <div className="panel-content panel-content text-yellow-600">No se adaptan bien a climas calurosos debido a su pelaje grueso. Prefieren el frío.</div>
          </div>

          <div className="faq-question">
            <input id="q5" type="checkbox" className="panel" />
            <div className={`plus ${openPanel === 'q5' ? 'clicked' : ''}`} onClick={() => handleClick('q5')}><LuDog /></div>
            <label htmlFor="q5" className="panel-title">¿Son los Alaska Malamutes adecuados para familias con niños?</label>
            <div className="panel-content panel-content text-yellow-600">Sí, pueden ser excelentes compañeros para familias con niños, pero siempre deben supervisarse.</div>
          </div>

          <div className="faq-question">
            <input id="q6" type="checkbox" className="panel" />
            <div className={`plus ${openPanel === 'q6' ? 'clicked' : ''}`} onClick={() => handleClick('q6')}><LuDog /></div>
            <label htmlFor="q6" className="panel-title">¿Son los Alaska Malamutes fáciles de entrenar?</label>
            <div className="panel-content panel-content text-yellow-600">Son inteligentes pero pueden ser tercos, por lo que requieren un entrenamiento firme y consistente desde una edad temprana.</div>
          </div>

          <div className="faq-question">
            <input id="q7" type="checkbox" className="panel" />
            <div className={`plus ${openPanel === 'q7' ? 'clicked' : ''}`} onClick={() => handleClick('q7')}><LuDog /></div>
            <label htmlFor="q7" className="panel-title">¿Cuál es la personalidad típica de un Alaska Malamute?</label>
            <div className="panel-content panel-content text-yellow-600">Son amigables, afectuosos y juguetones, pero también pueden ser independientes y territoriales.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
