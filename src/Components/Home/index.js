import { useSelector } from 'react-redux';

function Home() {
    const webSiteConfig = useSelector(state => state.homePage.webSiteConfig)

    return(
        <div>
            Hii
            {webSiteConfig.title}
        </div>
    )
}

export default Home ;