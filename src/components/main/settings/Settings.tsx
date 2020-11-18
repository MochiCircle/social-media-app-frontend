import React from 'react';

interface IProps {
    id: number;
}

export const Settings: React.FC<IProps> = (props: IProps) => {

    const fig:IProps = {
        id: 1,
    };

    return (
        <div>{props.id}</div>
    )
}