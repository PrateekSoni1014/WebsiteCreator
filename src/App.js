import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './assets/styles/index.css';
import Routes from './routes';
import {getWebSiteDataStart} from './store/reducer/homePage';

function App(props) {
  const dispatch = useDispatch();
  useEffect(()=>{
    let currentDomain = window.location.hostname;
    dispatch(getWebSiteDataStart(currentDomain))
  },[dispatch])
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
