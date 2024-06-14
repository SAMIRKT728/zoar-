import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { TextField } from "@mui/material"; // Importa TextField de Material-UI

export const AppMui = ({children}) => {
    const tema = createTheme({
    "palette": {
        "common": {
            "black": "#000",
            "white": "#fff"
        },
        "background": {
            "paper": "rgba(255, 255, 255, 1)",
            "default": "#fafafa"
        },
        "primary": {
            "light": "rgba(250, 149, 151, 1)",
            "main": "rgba(243, 105, 109, 1)",
            "dark": "#b71c1c",
            "contrastText": "rgba(255, 255, 255, 1)"
        },
        "secondary": {
            "light": "rgba(105, 243, 238, 1)",
            "main": "rgba(0, 222, 229, 1)",
            "dark": "rgba(0, 161, 158, 1)",
            "contrastText": "rgba(255, 255, 255, 1)"
        },
        "error": {
            "light": "#e57373",
            "main": "rgba(241, 25, 53, 1)",
            "dark": "rgba(211, 47, 47, 1)",
            "contrastText": "#fff"
        },
        "text": {
            "primary": "rgba(5, 5, 5, 1)",
            "secondary": "rgba(155, 155, 155, 1)",
            "disabled": "rgba(0, 0, 0, 0.38)",
            "hint": "rgba(0, 0, 0, 0.38)"
        }
    },
        components: {
            // Definición de estilos para los componentes...
            MuiTextField: {
                styleOverrides: {
                    root: {
                        // Estilos personalizados para TextField
                        backgroundColor: 'rgba(255, 255, 255, 1)', 
                        borderRadius: 10,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '10px',
                            '& fieldset': {
                                borderColor: '#D4D9DE', 
                            },
                            '&:hover fieldset': {
                                borderColor: 'black',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'black', 
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#A7B1BC',
                            fontSize: '14px', 
                        },
                        '& .MuiInputBase-input': {
                            fontSize: '14px', 
                        },
                    },
                },
            },

            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#ffffff', 
                        borderRadius: 10,
                        position: 'relative',
                        height:'', 
                        margin: '0',
                        padding: '20px',
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={tema}>
            {children}
        </ThemeProvider>
    );
};
