
import React from 'react'
import {StyledView, StyledText} from './HeaderComponents';




const Header = ({text}) => {
    return (
        <StyledView>
            <StyledText>{text}</StyledText>
        </StyledView>
    )
}

export default Header
