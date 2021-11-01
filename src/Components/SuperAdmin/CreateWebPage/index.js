import { Form } from "react-bootstrap";
import { useState } from "react";
import { createSettingStart } from "../../../store/reducer/setting";
import { useDispatch } from "react-redux";

function CreateWebPage(){
    const [webSiteTitle , updateWebSiteTitle] = useState('');
    const [webSiteDomain , updateWebSiteDomain] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        let domain = (new URL(webSiteDomain));
        if(domain){
            domain = domain.hostname.replace('www.','');
            domain = domain.replace('.com','');
            domain = domain.replace('.in','');
            let data = {
                title: webSiteTitle,
                navElements:[
                    {
                        label : 'Home',
                        path: '/'
                    }
                ]
            }
            dispatch(createSettingStart({data,domain }))
        }

    }
    return(
        <>
            <Form onSubmit={handleSubmit}>            
                <Form.Group className="mb-3" controlId="webSiteTitle">
                    <Form.Label>WebSite Title</Form.Label>
                    <Form.Control type="text" onChange={(e)=>updateWebSiteTitle(e.target.value)} placeholder="Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="webSiteTitle">
                    <Form.Label>WebSite Domain</Form.Label>
                    <Form.Control type="text" onChange={(e)=>updateWebSiteDomain(e.target.value)} placeholder="Title" />
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
export default CreateWebPage;