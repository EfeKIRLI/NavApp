import React from "react";
import navigationsStrings from "../constants/navigationsStrings";
import TabRoutes from "./TabRoutes";

import { ProductDetails,EditProfile } from "../Screens";
import Searchh from "../Screens/Search/Searchh";
// function MainStack(Stack)
const MainStack = (Stack) => {
  return (
    <>
    <Stack.Screen name={navigationsStrings.TABS} component={TabRoutes} />
    {/* <Stack.Screen name={navigationsStrings.PRODUCT_DETAILS} component={ProductDetails} />
    <Stack.Screen name={navigationsStrings.SEARCHH} component={Searchh} />
    <Stack.Screen name={navigationsStrings.EDIT_PROFILE} component={EditProfile} /> */}
    </>
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