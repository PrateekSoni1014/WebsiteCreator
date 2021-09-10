import { useSelector } from 'react-redux';

function Home() {
    const webSiteConfig = useSelector(state => state.homePage.webSiteConfig)

    return(
        <div>
            {webSiteConfig.title}
        </div>
    )
}

export default Home ;