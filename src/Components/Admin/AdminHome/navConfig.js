import { Fragment, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateSettingStart } from "../../../store/reducer/setting";
function NavElement(){
    const dispatch = useDispatch();
    const webSiteConfig = useSelector(state => state.setting.webSiteConfig)
    
    const [inputFields, setInputFields] = useState([
        { label: '', path: '' }
    ]);
    
    useEffect(()=>{
        if(webSiteConfig.navElements){
            setInputFields(webSiteConfig.navElements)
        }
    },[webSiteConfig])


    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ label: '', path: '' });
        setInputFields(values);
    };

    const handleRemoveFields = index => {
        if(inputFields.length === 1) return;
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "label") {
        console.log("🚀 ~ useEffect ~ webSiteConfig.navElements", webSiteConfig.navElements)
            values[index].label = event.target.value;
        } else {
            values[index].path = event.target.value;
        }

        setInputFields(values);
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