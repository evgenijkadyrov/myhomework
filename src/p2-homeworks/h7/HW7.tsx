import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import {AlternativeSuperSelect} from "./common/c5-SuperSelect/AlternativeSuperSelect";

const arr = ['x', 'y', 'z']
const name=['minsk','gomel','kiev']
function HW7() {
    const [value, onChangeOption] = useState(arr[1])
    const [value1, setValue] = useState('minsk')

    const onClickHandler = (value1: string) => {
        setValue(value1)}
        return (
            <div>
                <hr/>

                {/*should work (должно работать)*/}
                <div>
                    <SuperSelect
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
                <div>
                    <SuperRadio
                        name={'radio'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>

                <hr/>
                {/*для личного творчества, могу проверить*/}
                <AlternativeSuperSelect items={name}
                                        value={value1}
                                        onClick={onClickHandler}/>
                {/*<AlternativeSuperRadio/>*/}
                <hr/>
            </div>
        )
    }

export default HW7
