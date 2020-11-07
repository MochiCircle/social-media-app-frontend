import React from "react";

interface IProps{

}

export const WelcomeMessage: React.FC<IProps> = (props:IProps) => 
{
    return (
    <h4 style={{font: "white"}}>
        Welcome back, user!
    </h4>
    )
}