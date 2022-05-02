import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from './common/c8-SuperDoubleRange/SuperDoubleRange'


function HW11() {

    const [value1, setValue1] = useState<number>(50)
    const [value2, setValue2] = useState<number>(100)
    const [max2, setMax] = useState(115)

    const changeValue = (value: number) => {
        setValue1(value)
    }
    const changeDValue = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }
    const changeMaxSet = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(+e.currentTarget.value)
    }
    return (
        <div>
            <hr/>
            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={changeValue} value={value1} max={max2}
                />
            </div>
            <input value={max2} onChange={changeMaxSet}/><span> max value</span>
            <div>
                <span>{value1}</span>
                <SuperDoubleRange onChangeRange={changeDValue} value={[value1, value2]} max={max2}
                />

            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
