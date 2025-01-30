import { Card } from "antd";
const isdark = true;

export const antConfig = {
    token: {
      colorPrimary: isdark ? '#ff8d26' :'#8CC63F',
      secondaryColor: isdark ? '#50C8F2' : '#8CC63F',
      borderRadius: '4px',
    },
    components: {
      Card: {
        borderRadius: '10px', // Adjust the border radius for NTD card or any specific card component
      },
    },
   
}