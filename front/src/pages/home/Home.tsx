
import  {useState} from 'react';
import './Home.css';
import { Button } from '@gear-js/ui';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Groupbutons from './Groupbutons';
import Tab from './Tab';
import Iguana from './iguana';
import Imagenes from './imagenes';
import Barra from './barra';
import Step from './Step';
import Card from './Card';
import Box from '@mui/material/Box';
import { Link as ReachLink } from 'react-router-dom';


 



function Home() {

  const [value, setValue] = useState(false);



  const PushButton = function PushButton () {

    setValue(prevValue => !prevValue );

    const JSONData ='{"name": "Kolade", "favFriends":"Carlos"}';
    Connection(JSONData);

  }


  const Connection = async (JSONData:any) => {

      const res = await fetch('http://localhost:5000/button',
      { method : "POST", 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(JSONData)})
      const data = await res.json();
      console.log(data);
    }

   
    

  


  return(
<>
<Stack>
<Barra/>
<Box height ="50px" width= "100%"/>
<Stack
  direction="row"
  spacing={10}
>
<Card/>
<Card/>
<Card/>
</Stack>

<Box height ="50px" width= "100%"/>
<Stack
  direction="row"
  spacing={10}
>
<Card/>
<Card/>
<Card/>
</Stack>
<ReachLink to='/main' ><button>Main</button></ReachLink>
</Stack>






</>

  )
}

export { Home };
