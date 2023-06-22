import React from 'react'
import Logo from './Logo'
import Aspect from '~/theme/aspects';
import { Flex, Center } from '@chakra-ui/react';

const SurveyHeader = () => {
    const responsiveHeight = [Aspect.mobile.layout.header.height, Aspect.mobile.layout.header.height, Aspect.desktop.layout.header.height]

    return (
        <Center><Logo /></Center>
    )
}

export default SurveyHeader