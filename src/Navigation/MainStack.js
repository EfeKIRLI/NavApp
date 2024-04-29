import React from "react";
import navigationsStrings from "../constants/navigationsStrings";
import TabRoutes from "./TabRoutes";


// function MainStack(Stack)
const MainStack = (Stack) => {
  return (
    <Stack.Screen name={navigationsStrings.TABS} component={TabRoutes} />
  );
}

export default MainStack;



// export default function (Stack) {
//     return (
        
//             <Stack.Sceen
//                 name={navigationsStrings.TABS}
//                 component={TabRoutes}
            
//         />
//     )
// }