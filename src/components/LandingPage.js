import React from 'react'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../reducer/counterSlice'

function LandingPage() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.counter);
    return (
        <>
            <Container maxWidth="md">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "10vh", gap: "10px",backgroundColor:"black" }}>
                    <Typography variant="h4" style={{color:'white'}}>
                        @reduxjs/toolkit
                    </Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "90vh", gap: "10px" }}>

                    <div>
                        <Button variant="contained" onClick={() => dispatch(increment())} style={{ color: "black" }}>
                            +
                        </Button>
                    </div>
                    <div>
                        <Typography variant="h6" style={{ color: "black" }}>{state}</Typography>
                    </div>
                    <div>
                        <Button variant="contained" onClick={() => dispatch(decrement())} style={{ color: "black" }}>
                            -
                        </Button>

                    </div>
                </div>
            </Container>
        </>
    )
}

export default LandingPage