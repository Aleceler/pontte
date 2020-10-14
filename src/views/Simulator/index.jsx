import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { formatToBRL } from 'brazilian-values';

import Card from '../../components/Card/index.jsx'
import Tooltip from '../../components/Tooltip'
import ChooseButton from '../../components/Buttons/ChooseButton'
import SubmitButton from '../../components/Buttons/SubmitButton'
import RangeInput from '../../components/RangeInput'

const Simulator = () => {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.simulator.simulatorList);
    const currentValue = useSelector((state) => state.simulator.currentValue);

    const [ currentButton, setCurrentButton ] = useState()

    useEffect(() => {
        dispatch.simulator.getSimulatorList()
    }, [])
    
    if(list === '') return false

    return (
        <Container>
            <Card title="Valor Solicitado" > 
                <Amount>{formatToBRL(list.valoresEmprestimo[currentValue])}</Amount>
                <Amounts>
                    <GrossAmount>Valor Bruto: {formatToBRL(list.valoresEmprestimeBruto[currentValue])} </GrossAmount>
                    <Tooltip text="Valor com os juros calculados" />
                </Amounts>
                <RangeInput 
                    step={1}
                    max={list.valoresEmprestimo.length -1}
                    min={0}
                    list={list}
                />
                <TextQtd>Selecione a quantidade de parcelas</TextQtd>
                <ButtonsSection>
                    {list.parcelas.map((item, index) => <ChooseButton active={index === currentButton} onClick={() => setCurrentButton(index)} title={`${list.prazos[index]} meses`} subtitle={formatToBRL(item[currentValue])}/>)}
                </ButtonsSection>
                <SubmitButton style={currentButton === undefined ? {background: '#666'} : {}} disabled={currentButton === undefined} >
                    Gostei, Continuar
                </SubmitButton>
                <DescriptionText>Taxa de 1.09% ao mês, Valor da primeira parcela - Sistema de Amortização Constante (suas parcelas diminuem com o tempo).</DescriptionText>
            </Card>
        </Container>
    )
}

const Amounts = styled.div`
    display: flex;
`

const Amount = styled.p`
    color: ${props => props.theme.colors.primary};
    font-size: 38px;
    font-weight: bold;
`

const GrossAmount = styled.p`
    color: ${props => props.theme.colors.primary};
    font-size: 18px;
    font-weight: bold;
    padding-right: 4px;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    @media (max-width: 800px) {
        padding: 30px 0;
    }
`

const TextQtd = styled.p`
    padding: 20px 0;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: ${props => props.theme.colors.secondary};
`

const ButtonsSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    flex-wrap: wrap;

    @media (max-width: 800px) {
        width: 50%;
        justify-content: space-around;
    }
`

const DescriptionText = styled.p`
    color: ${props => props.theme.colors.primary};
    font-size: 12px;
    @media (max-width: 800px) {
        padding: 0 15px;
    }
`

export default Simulator