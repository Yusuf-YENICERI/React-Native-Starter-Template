
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import {StyledView, StyledText} from './HeaderComponents';

import { updateHeader } from "../../redux/actions";



const Header = ({text}) => {

    const header = useSelector((state) => (state.all.header));
    
    const dispatch = useDispatch();

    return (
        <StyledView>
            <StyledText onClick={()=>{
                dispatch(updateHeader('ELHAMDÜLİLLAH'))
            }}>{header}</StyledText>
        </StyledView>
    )
}

export default Header
