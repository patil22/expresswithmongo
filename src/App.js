import React from 'react'

  import { AppContext} from './Context/contextapi';
import Hello from './Hello'
const App = () => {
  return (
    <AppContext>
    <div className='text-6xl text-green-500 bg-purple-200' >App                      
 <Hello/>

 
    </div>
    </AppContext>
  );
};

export default App;