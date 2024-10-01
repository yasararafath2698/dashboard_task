import { colors, createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#90b17c',
            contrastText: '#FFF'
        },
        secondary: {
            main: '#426e90'  
        },
        text: {
            primary: '#414850',
            secondary: '#000'
        }
    },
    typography: {
        h6: {
            fontSize: 14,
            fontWeight: 700,
        },
        h5: {
            fontSize: 16,
            fontWeight: 700,
        },
        fs_13:{
            fontSize:13,
            fontWeight:500

        },
        fontFamily:"Helvetica"
    },
});

export default theme;