import { styled, TextField } from '@mui/material'
import React from 'react'

function InputPage({ typeInput, lableInput }) {
    return (
        <InputPageStyled>
            <TextField
                id="outlined-basic"
                label={lableInput}
                variant="outlined"
                fullWidth
                type={typeInput}
                sx={{
                    "& label": {
                        "&.Mui-focused": {
                            marginLeft: 0
                        }
                    }
                }}
            />
        </InputPageStyled>
    )
}

const InputPageStyled = styled('div')({
    marginBottom: "2.4rem",
    input: {
        // height: '5.6rem',
        display: "flex",
        alignItems: "center",
        fontSize: "1.6rem",
    },
    // "label#outlined-basic-label": {
    //     fontSize: "1.6rem",
    // },
    "legend":{
        // fontSize: "12px",
        // height:"2.5rem",
        // width:"max-content"
    }
})
export default InputPage
