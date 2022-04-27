import React from 'react'
import {Box, Slider} from "@mui/material";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    max: number

}

export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, max
            }
) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        //@ts-ignore
        onChangeRange(newValue as number[])
    };

    return (
        <Box sx={{width: 300}}>
            <Slider
                max={max}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"

            />
        </Box>
    );
}