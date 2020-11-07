import React from 'react';
import { MyObject } from './practiceModel';

interface IProps{
    objects:MyObject[];
}

export const PracticeTable:React.FC<IProps> = (props:IProps) =>{
    
    
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Item1</td>
                        <td>Item2</td>
                        <td>Item3</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.objects.map((e,i) => {
                            <tr key={i}>
                                <td>{e.item1}</td>
                                <td>{e.item2}</td>
                                <td>{e.item3}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}