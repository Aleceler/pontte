import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { formatToBRL } from 'brazilian-values';
import { PropTypes } from 'prop-types';

const RangeInput = ({min, max, step, list}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch.simulator.getCurrentValue((list.valoresEmprestimo.length -1)/2)
    }, [])

    return (
        <RangeSection>
            <input min={min} max={max} step={step} type="range" onChange={(e) => dispatch.simulator.getCurrentValue(e.target.value)} />
            <MinMaxValues>
                <span>{formatToBRL(list.valoresEmprestimo[min])}</span>
                <span>{formatToBRL(list.valoresEmprestimo[max])}</span>
            </MinMaxValues>
        </RangeSection>
    )
}

RangeInput.defaultProps = {
    min: 0,
    max: 5,
    step: 1,
};

RangeInput.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step:PropTypes.number.isRequired,
};

const RangeSection = styled.div`
    width: 90%;
    padding-top: 15px;

    input{
        width: 100%;
        -webkit-appearance: none;
        appearance: none;
        display: inline-block;
        height: 5px;
        position: relative;
        border-radius: 5px;
        background-color: ${props => props.theme.colors.secondary};
        outline: none;
    
        &::-webkit-slider-thumb {
            width: 15px;
            height: 15px;
            border-radius: 50px;
            -webkit-appearance: none;
            background: ${props => props.theme.colors.primary};
        }
    }
`

const MinMaxValues = styled.div`
    display: flex;
    justify-content: space-between;

    span{
        color: ${props => props.theme.colors.primary};
    }
`

export default RangeInput