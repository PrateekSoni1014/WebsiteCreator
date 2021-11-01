import { Fragment, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateSettingStart } from "../../../store/reducer/setting";
function NavElement(){
    const dispatch = useDispatch();
    const webSiteConfig = useSelector(state => state.setting.webSiteConfig)
    
    const [inputFields, setInputFields] = useState([
        { label: '', path: '', 
          footerRequired: true, headerRequired: true, authRequired: false
        }
    ]);
    
    useEffect(()=>{
        if(webSiteConfig.navElements){
            console.log("🚀 ~ useEffect ~ webSiteConfig.navElements", webSiteConfig.navElements)
            setInputFields(webSiteConfig.navElements)
        }
    },[webSiteConfig])


    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ label: '', path: '', 
            footerRequired: true, headerRequired: true, authRequired: false
        });
        setInputFields(values);
    };

    const handleRemoveFields = index => {
        if(inputFields.length === 1) return;
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleInputChange = (index, event) => {
        try {
            let values = [...inputFields];
            let dataObject = {...values[index]}
            dataObject[event.target.name] = event.target.value;
            values[index] = dataObject;
            console.log("🚀 ~ handleInputChange ~ values", values)
            setInputFields(values);
        } catch (error) {
            console.log("🚀 ~ handleInputChange ~ error", error)
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const currentDomain = localStorage.getItem('currentDomain')
        dispatch(updateSettingStart(  {currentDomain, data:{navElements:inputFields} } ));
    };

    return(
        <>  
            <Form onSubmit={handleSubmit}>
                <div className="form-row">
                    {inputFields.map((inputField, index) => (
                        <Fragment key={`${inputField}~${index}`}>
                            <div className="form-group col-sm-4">
                                <label htmlFor="label">Nav{index+1} Title </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="label"
                                    name="label"
                                    value={inputField.label}
                                    onChange={event => handleInputChange(index, event)}
                                />
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="path">Nav{index+1} Path </label>
                                <input
                                    type="text" 
                                    className="form-control" 
                                    id="path"
                                    name="path"
                                    value={inputField.path}
                                    onChange={event => handleInputChange(index, event)}
                                />
                            </div>
                            <label htmlFor="Header">Header{index+1} Required </label>
                            <div className="form-group col-sm-4">

                                <label htmlFor="Header">Yes</label>

                                <input
                                    type="radio" 
                                    className="" 
                                    id= {`headerRequired${index}`}
                                    name="headerRequired"
                                    value = {true}
                                    checked={inputField.headerRequired === 'true'}
                                    onChange={event => handleInputChange(index, event)}
                                />
                                <label htmlFor="Header">No</label>

                                <input
                                    type="radio" 
                                    className="" 
                                    id= {`headerRequired${index}`}
                                    name="headerRequired"
                                    value = {false}
                                    checked={inputField.headerRequired === 'false'}
                                    onChange={event => handleInputChange(index, event)}
                                />
                            </div>
                            <label htmlFor="path">Footer{index+1} Required </label>
                            <div className="form-group col-sm-4">

                                <label htmlFor="path">Yes</label>

                                <input
                                    type="radio" 
                                    className="" 
                                    id="footerRequired"
                                    name="footerRequired"
                                    value = {true}
                                    checked={inputField.footerRequired === 'true'}
                                    onChange={event => handleInputChange(index, event)}
                                />
                                <label htmlFor="path">No</label>

                                <input
                                    type="radio" 
                                    className="" 
                                    id="footerRequired"
                                    name="footerRequired"
                                    value = {false}
                                    checked={inputField.footerRequired === 'false'}
                                    onChange={event => handleInputChange(index, event)}
                                />
                            </div>
                            <label htmlFor="Auth">Auth{index+1} Required </label>
                            <div className="form-group col-sm-4">

                                <label htmlFor="Auth">Yes</label>

                                <input
                                    type="radio" 
                                    className="" 
                                    id="authRequired"
                                    name="authRequired"
                                    value = {true}
                                    checked={inputField.authRequired === 'true'}
                                    onChange={event => handleInputChange(index, event)}
                                />
                                <label htmlFor="Auth">No</label>

                                <input
                                    type="radio" 
                                    className="" 
                                    id="authRequired"
                                    name="authRequired"
                                    value = {false}
                                    checked={inputField.authRequired === 'false'}
                                    onChange={event => handleInputChange(index, event)}
                                />
                            </div>
                            <div className="form-group col-sm-2">
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    onClick={() => handleRemoveFields(index)}
                                >
                                    -
                                </button>
                                <button
                                    className="btn btn-link"
                                    type="button"
                                    onClick={() => handleAddFields()}
                                >
                                    +
                                </button>
                            </div>
                        </Fragment>
                    ))}
                    console.log("🚀 ~ NavElement ~ inputFields", inputFields)
                </div> 
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
export default NavElement;