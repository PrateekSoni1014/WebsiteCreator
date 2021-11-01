import { useSelector } from 'react-redux';

function Home(props) {
    const webSiteConfig = useSelector(state => state.setting.webSiteConfig)
    return(
        <div>
            {webSiteConfig.title}
        </div>
    )
}

export default Home ;