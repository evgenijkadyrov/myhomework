import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from './common/c8-SuperDoubleRange/SuperDoubleRange'


function HW11() {
    const [value1, setValue1] = useState<number>(50)
   /* const [value2, setValue2] = useState(100)*/

    const changeValue=(value:number)=>{
        setValue1(value)
    }
    const changeDValue=(value:any)=>{
        setValue1(value[0])
    }
    return (
        <div>
            <hr/>

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>

                <SuperRange onChangeRange={changeValue} value={value1}

                />
            </div>

            <div>
                <span>{value1}</span>

                <SuperDoubleRange onChangeRange={changeDValue} value={[value1,60]}

                />
                <span>{value1}</span>
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
