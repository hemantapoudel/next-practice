import React from "react";
import Link from "next/link";
import { Box, Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { FaUserAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'

const SignUp = () => (
  <Box borderWidth='1px' p='100'>
    
    <Box borderWidth='1px' p = '50'>
    <Text as = 'b' align='center' >Sign Up</Text><br></br><br></br>
        <Stack spacing="4">
            <InputGroup>
                <InputLeftElement pointerEvents='none' children={<FaUserAlt/>} />
                <Input type='text' placeholder='First Name' />
            </InputGroup>
            <InputGroup>
                <InputLeftElement pointerEvents='none' children={<FaUserAlt/>} />
                <Input type='text' placeholder='Last Name' />
            </InputGroup>
            <InputGroup>
                <InputLeftElement pointerEvents='none' children={< MdEmail />} />
                <Input type='email' placeholder='Email Address' />
            </InputGroup>
            <InputGroup>
                <InputLeftElement pointerEvents='none' children={< BsFillTelephoneFill />} />
                <Input type='phone' placeholder='Phone' />
            </InputGroup>

        </Stack>
    </Box>

  </Box>
);

export default SignUp;