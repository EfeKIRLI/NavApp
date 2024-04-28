import React from "react";
import navigationsStrings from "../constants/navigationsStrings";
import TabRoutes from "./TabRoutes";

export default function (Stack) {
    return (
        <Stack.Sceen
            name={navigationsStrings.TABS}
            component={TabRoutes}
        />
    )
}