// demonstration of how can we avoid prop drilling.
import React, {useContext} from "react";
// step 1: create Context
const BulbContext = React.createContext();

export function BulbProvider({ children }){
    const [bulbOn, setBulbOn] = React.useState(false);

    return (
        <BulbContext.Provider value={{bulbOn:bulbOn, setBulbOn:setBulbOn}}>
            {children}
        </BulbContext.Provider>
    )
}

export function ContextAPI(){

    return (
        // step 2: Wrap the required children with provider
        <BulbProvider>
        <div>
            <LightBulb/>
        </div>
        </BulbProvider>
    )
}
function LightBulb() {
    return (
        <div>
            <BulbOn />
            <ToggleBulb />
        </div>
    )
}
function BulbOn() {
    // step 3: extract the values/function from the context object.
    const {bulbOn} = useContext(BulbContext);
    return (
        <div>
            {bulbOn ? "ON" : "OFF"}
        </div>
    )
}
function ToggleBulb() {
    const {setBulbOn} = useContext(BulbContext);
    function toggle(){
        setBulbOn(currentState => !currentState);
    }
    return (
        <div>
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}