import logo from './logo.svg';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { Routing } from './component/Router';
import { Store } from './component/Store';


function App() {
  return (
    <div className="App">
         <Provider store={Store}>
            <Routing/>
         </Provider>
        
    </div>
  );
}

export default App;
