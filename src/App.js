import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import './assets/styles/index.css';
import Routes from './routes';
import {getWebSiteDataStart} from './store/reducer/setting';

function App(props) {
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(()=>{
    let currentDomain = window.location.hostname;
    currentDomain = 'testRishi';
    if(currentDomain === process.env.REACT_APP_BASE_DOMAIN) history.push("/createWebPage");
    dispatch(getWebSiteDataStart(currentDomain))
    localStorage.setItem('currentDomain',currentDomain )
  },[dispatch])
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
