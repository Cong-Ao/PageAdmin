"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var react_1 = require("react");
function ButtonIcons(_a) {
    var children = _a.children;
    return (react_1["default"].createElement(ButtonIconsStyled, null, children));
}
var ButtonIconsStyled = material_1.styled('div')({
    olor: 'inherit',
    width: '100%',
    border: '1px solid rgba(145, 158, 171, 0.32)',
    height: '4.8rem',
    backgroundColor: 'transparent',
    outline: '0px',
    margin: '0px',
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    appearance: 'none',
    textDecoration: 'none',
    fontWeight: '700',
    textTransform: 'capitalize',
    minWidth: '64px',
    padding: '7px 21px',
    borderRadius: '8px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    '&:hover': {
        backgroundColor: "rgba(145, 158, 171, 0.08)"
    }
});
exports["default"] = ButtonIcons;
