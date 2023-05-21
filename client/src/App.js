
import './App.css';

import React from 'react';
import Group from './Group';
function App() {
  const [group, setGroup] = React.useState('none');
  if(group === 'none')
  {
    return (
      <div className='App'>
         <div className='App-header'>
           <div>
             Choose your group to chat !!
           </div>
           <div className='chooseGrp'>
             <button onClick={()=> setGroup('RCB')}>RCB Fans</button>
             <button onClick={()=> setGroup('MI')}>MI fans</button>
           </div>
         </div>
      </div>
   );
  }else if(group === 'RCB'){
    return (
      <Group title="RCB" setGroup={setGroup}/>
    )
  }else{
    return (
      <Group title="MI" setGroup={setGroup}/>
    )
  }

}

export default App;
