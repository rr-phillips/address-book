import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export default function Loading() {
    return (
        <div
         style={{
           width: "100%",
           height: "100",
           display: "flex",
           justifyContent: "center",
           alignItems: "center"
         }}
        >
            <ThreeDots color="#d9d9d9" height="100" width="100" />
        </div>
    )
}