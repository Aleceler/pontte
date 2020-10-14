import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';


const Tooltip = ({text}) => {
    return (
        <TooltipStyle>
            ?
            <span>{text}</span>
        </TooltipStyle>
    )
}

Tooltip.defaultProps = {
    text: 'Tooltip Text'
};

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
};


const TooltipStyle = styled.span`
    position: relative;
    display: inline-block;
    font-size: 12px;
    padding: 1px;
    height: 15px;
    width: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px black;
    border-radius: 50px;

    span {
        visibility: hidden;
        width: 120px;
        background-color: ${props => props.theme.colors.primary};
        color: #fff;
        text-align: center;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    span::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }

    &:hover span {
        visibility: visible;
        opacity: 1;
    }
`

export default Tooltip