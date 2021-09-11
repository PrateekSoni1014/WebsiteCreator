import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateSettingStart } from "../../../store/reducer/setting";


function BaseElement(){
    const [webSiteTitle , updateWebSiteTitle] = useState('');
    const dispatch = useDispatch();
    const webSiteConfig = useSelector(state => state.setting.webSiteConfig)

    const handleSubmit = e => {
        e.preventDefault();
        const currentDomain = localStorage.getItem('currentDomain')
        dispatch(updateSettingStart(  {currentDomain, data:{title:webSiteTitle} } ))
    };
    return(
        <>
            <Form onSubmit={handleSubmit}>            
                <Form.Group className="mb-3" controlId="webSiteTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={webSiteConfig.title ? webSiteConfig.title : '' } onChange={(e)=>updateWebSiteTitle(e.target.value)} placeholder="Title" />
                </Form.Group>
                <div className="submit-button">
                    <button
                        className="btn btn-primary mr-2"
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </Form>
        </>
    )
}
export default BaseElement;