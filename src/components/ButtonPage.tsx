import { styled } from '@mui/material';
import React from 'react';

function ButtonPage({nameButton}) {
    return (
        <ButtonPageStyled>
            {nameButton}
        </ButtonPageStyled>
    );
}

const ButtonPageStyled = styled("button")({
    border:"unset",
    borderRadius:"8px",
    width:"100%",
    padding:"1rem 0px",
    textAlign:"center",
    color:"#fff",
    background:"rgb(32, 101, 209)",
    boxShadow:"rgb(32 101 209 / 24%) 0px 8px 16px 0px",
    transition:"ease all 0.5s",
    marginTop:"2.4rem",
    cursor: "pointer",
    fontSize:"1.5rem",
    '&:hover':{
        background:'rgb(16, 57, 150)',
    }
})
export default ButtonPage;