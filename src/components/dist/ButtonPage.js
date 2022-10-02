"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var react_1 = require("react");
function ButtonPage(_a) {
    var nameButton = _a.nameButton;
    return (react_1["default"].createElement(ButtonPageStyled, null, nameButton));
}
var ButtonPageStyled = material_1.styled("button")({
    border: "unset",
    borderRadius: "8px",
    width: "100%",
    padding: "1rem 0px",
    textAlign: "center",
    color: "#fff",
    background: "rgb(32, 101, 209)",
    boxShadow: "rgb(32 101 209 / 24%) 0px 8px 16px 0px",
    transition: "ease all 0.5s",
    marginTop: "2.4rem",
    cursor: "pointer",
    fontSize: "1.5rem",
    '&:hover': {
        background: 'rgb(16, 57, 150)'
    }
});
exports["default"] = ButtonPage;
