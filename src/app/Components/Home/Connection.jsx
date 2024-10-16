import React, { useEffect ,useState} from "react";

export default function connection() {



    // console.log(connection)
    return (
        <div className={` hidden   top-0 w-full z-99`}>
            {!connection && <h1 className="w-full py-2 font-medium text-center bg-yellow-300 animate-pulse">Connecting . . .</h1>}
            {connection && <h1 className="w-full py-2 font-medium text-center bg-green-300 animate-bounce">Connected</h1>}
        </div>
    )
}