import React from 'react';
// importamos card para poder utilizarlo
import Card from './Card';
/*export default function Cards(props) {
  esto estab asi , y se reemplazo por lo siguiente*/
export default function Cards({cities}) {
  /* vamos a hacr un map de cities, que por cada cities va a devolver un card*/
  return <div>{cities.map((c) => (
    <Card
      key = {c.id} //pasamos un id para que diferencie componentes al renderizar
      max={c.main.temp_max}
      min={c.main.temp_min}
      name={c.name}
      img={c.weather[0].icon}
      onClose={() => alert(c.name)}/>
  )
  )}
  </div>
  
};