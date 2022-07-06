import React from "react";
export default function Counter(props){

    const number = props.number || 0
    const digits = number.toString().split("").reverse()
    console.log(digits);

    
    return <div className="container">
        
     
                <div className="box"><h1><i class="fas fa-clock"></i></h1></div>
                <div className="box"><h1>{digits.length > 5 ? digits[5]: 0}</h1></div>
                <div className="box"><h1>{digits.length > 4 ? digits [4]: 0}</h1></div>
                <div className="box"><h1>{digits.length > 3 ? digits [3]: 0}</h1></div>
                <div className="box"><h1>{digits.length > 2 ? digits [2]: 0}</h1></div>
                <div className="box"><h1>{digits.length > 1 ? digits [1]: 0}</h1></div>
                <div className="box"><h1>{digits[0]}</h1></div>
    </div>
}