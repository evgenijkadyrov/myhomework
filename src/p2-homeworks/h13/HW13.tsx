import React, {ChangeEvent, useState} from "react";
import {RequestAPI} from "./api/appApi";


function Request() {
    const [success, setSuccess] = useState<boolean>(false)

    const setRequiest = () => {
        RequestAPI.updateRequiest(success)
            .then((res) => {
                alert(res.data.errorText)

            })
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }
    const onChangeHandlerChecked = (e: ChangeEvent<HTMLInputElement>) => {
        setSuccess(e.currentTarget.checked)
    }

    return (
        <div>
            <hr/>
            <button onClick={setRequiest}>button</button>
            <input type={"checkbox"} onChange={onChangeHandlerChecked}></input>
        </div>
    );
}

export default Request;
