import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';

const ChooseButton = ({title, subtitle, onClick, active}) => {
    return (
        <ChooseButtonStyled style={active ? {color: 'white', background: '#03033A'} : {}} onClick={onClick}>
            <p>{title}</p>
            <span>{subtitle}</span>
        </ChooseButtonStyled>
    )
}

ChooseButton.defaultProps = {
    title: 'Title',
    subtitle: 'Subtitle',
};

ChooseButton.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};


const ChooseButtonStyled = styled.button`
    height: 65px;
    width: 120px;
    border-radius: 6px;
    background: transparent;
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    margin: 5px 0;

    &:hover, :active, :focus {
        outline: none;
    }

    p{
        padding: 2px 0;
    }

    span{
        font-weight: 600;
        font-size: 16px;
    }
`

export default ChooseButton