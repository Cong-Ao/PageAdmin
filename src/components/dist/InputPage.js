"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var react_1 = require("react");
function InputPage(_a) {
    var typeInput = _a.typeInput, lableInput = _a.lableInput;
    return (react_1["default"].createElement(InputPageStyled, null,
        react_1["default"].createElement(material_1.TextField, { id: "outlined-basic", label: lableInput, variant: "outlined", fullWidth: true, type: typeInput, sx: {
                "& label": {
                    "&.Mui-focused": {
                        marginLeft: 0
                    }
                }
            } })));
}
var InputPageStyled = material_1.styled('div')({
    marginBottom: "2.4rem",
    input: {
        // height: '5.6rem',
        display: "flex",
        alignItems: "center",
        fontSize: "1.6rem"
    },
    // "label#outlined-basic-label": {
    //     fontSize: "1.6rem",
    // },
    "legend": {
    // fontSize: "12px",
    // height:"2.5rem",
    // width:"max-content"
    }
});
exports["default"] = InputPage;
