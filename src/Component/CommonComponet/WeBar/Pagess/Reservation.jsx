import { Box, Menu, MenuItem, styled, Typography } from '@mui/material'
import React, { useState } from 'react'



const Reservation = () => {
    const [resver, setResver] = useState(false)

    const handleClickMenu = () => {


        setResver(!resver)
    };

    const handleClose = () => {

        setResver(!resver)

    }
    const StyledMenu = styled((props) =>

    (<Menu {...props} />
    ))

        (({ theme }) => ({
            '& .MuiPaper-root': {
                borderRadius: 0,
                marginLeft: theme.spacing(50),
                marginTop: theme.spacing(-59.5),
                width: '37vh',
                minHeight: 70,
                backgroundColor: '#1A1C20'
            }
        }));

    return (
        <>

            <Typography onMouseEnter={handleClickMenu} sx={{ height: '60%', width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Montserrat', fontSize: '12px', color: 'whitesmoke', ":hover": { color: '#ea820a' } }}>
                RESERVATION

                <StyledMenu open={resver} onClose={handleClose}  >

                    <Box height="100%" width="100%"  >


                        <MenuItem onClick={handleClose} sx={{ color: 'whitesmoke', ":hover": { backgroundColor: '#2c2c2d' } }}>
                            Reservation Form
                        </MenuItem>
                        <MenuItem onClick={handleClose} sx={{ color: 'whitesmoke', ":hover": { backgroundColor: '#2c2c2d' } }} >
                            Reservation Form and Content
                        </MenuItem>


                    </Box>
                </StyledMenu>
            </Typography>
        </>
    )
}

export default Reservation