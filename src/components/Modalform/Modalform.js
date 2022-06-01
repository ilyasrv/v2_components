import React from "react";
import "./modalform.css";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

export const Modalform = () => {
    return (

        <div className="form-signin">
            <form>
                <img className="logo-signin" src="https://indacoin.io/static/images/6ff9233688ba95fe3e02f381443539fc.svg" alt="" width="150" height="100" />
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" style="height:50px" />
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" style="height:50px" />
                </div>
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="accept-policy" />
                        I agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms of use</a>
                    </label>
                </div>
                <button className="w-100" type="submit">Sign in</button>
                <a href="https://indacoin.io/auth/forgot">
                    <p className="forgot-pass">Forgot your password?</p>
                </a>
            </form>
        </div>

    );
};
