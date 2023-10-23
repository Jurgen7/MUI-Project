import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box backgroundColor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;








// import { Button, Typography } from "@mui/material";
// import { Settings, Send } from '@mui/icons-material';
// import styled from "@emotion/styled";

// function App() {

//   const BlueButton = styled(Button)(({theme})=>({
//     backgroundColor: theme.palette.secondary.main,
//     color:"#888",
//     margin:5,
//     "&:hover":{
//       backgroundColor: "lightblue"
//     }
//   }));

//   return (
//     <div>
//         <Button variant="text">Text</Button>

//         <Button 
//           variant="contained" 
//           color="otherColor" 
//           size="small"
//           startIcon={<Settings />}
//         >
//           Contained
//         </Button>


//         <Button variant="outlined" startIcon={<Send />}>Outlined</Button>

//         <Typography variant="h1" component="h2">
//           It uses h1 style but is a p tag
//         </Typography>

//         <Button variant="contained" sx ={{
//           backgroundColor: "skyblue",
//           color:"#888",
//           margin:5,
//           "&:hover":{
//             backgroundColor: "lightblue"
//           }
//         }}>My unique button</Button>

//         <BlueButton>My button</BlueButton>

//     </div>
//   );
// }
