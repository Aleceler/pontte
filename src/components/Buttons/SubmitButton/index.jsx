import styled from 'styled-components'

const SubmitButton = styled.button`
    height: 50px;
    width: 280px;
    border-radius: 50px;
    font-size: 18px;
    color: ${props => props.theme.colors.white};
    border: ${props => props.theme.colors.primary};
    background: linear-gradient(90deg,#820081,#6b0085,#310091,#00009c);
    margin: 10px 0;
    margin-top: 20px;
    cursor: pointer;

    &:hover, :active, :focus {
        outline: none;
    }
`

export default SubmitButton