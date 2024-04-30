import React from "react";
import navigationsStrings from "../constants/navigationsStrings";
import TabRoutes from "./TabRoutes";

import { ProductDetails,Search,EditProfile } from "../Screens";
// function MainStack(Stack)
const MainStack = (Stack) => {
  return (
    <>
    <Stack.Screen name={navigationsStrings.TABS} component={TabRoutes} />
    <Stack.Screen name={navigationsStrings.PRODUCT_DETAILS} component={ProductDetails} />
    <Stack.Screen name={navigationsStrings.SEARCH} component={Search} />
    <Stack.Screen name={navigationsStrings.EDIT_PROFILE} component={EditProfile} />
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