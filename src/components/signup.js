import React from "react";
function signup(){
    return(<div>
        <h1>Sign Up</h1>
        <form>
            name :<input type="text"></input><br/>
            email :<input type="email"></input><br/>
            password :<input type="password"></input><br/>
            comfirm password :<input type="password"></input><br/>
            <button type="submit">submit</button>
        </form>
    </div>);
}
export default signup;