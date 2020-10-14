import React, { Children } from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';

const Card = ({title, children}) => {
    return (
        <CardSimulator>
            <TitleCard>
               {title}
            </TitleCard>
            <CardContent>
                {children}
            </CardContent>
        </CardSimulator>
    )
}


Card.defaultProps = {
    title: 'Card Title'
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
};
  

const TitleCard = styled.div`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    height: 50px;
    width: 500px;
    position: relative;
    top: -25px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 10px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 800px) {
        width: 75%;
    }
`

const CardSimulator = styled.div`
    padding-bottom: 20px;
    width: 750px;
    background: ${props => props.theme.colors.white};
    border-radius: 15px;
    @media (max-width: 800px) {
        width: 95%;
    }
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export default Card