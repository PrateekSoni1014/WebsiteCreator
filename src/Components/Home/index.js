import { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getDocData } from '../../services/firebase'
import { setTitle } from '../../store/reducer/homePage';

function Home(props) {
    const [websiteData , updatewebsiteData] = useState({});
    useEffect(()=>{
        let test = getDocData('amazon');
        test.then((data)=>{
            updatewebsiteData(data);
        }).catch(()=>{
            console.log("Something went wrong")   
        })
    },[]);
    return(
        <div>
            {props.title}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        title: state.homePage.title
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        setTitle: ()=> dispatch(setTitle())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home) ;