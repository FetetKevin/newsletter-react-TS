import RightImg from "./assets/images/illustration-sign-up-desktop.svg";
import RightImgMobile from "./assets/images/illustration-sign-up-mobile.svg";
import IconSuccess from "./assets/images/icon-success.svg";
import Form from "./components/Form";
import {useState} from 'react';

function App() {
    const [validation, setValidation] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!emailRegex.test(inputValue) || inputValue.trim() === '') {
              setValidation(true);
            } else {
        setValidation(false);
        setFormSubmitted(true);
      }
    };

    const handleDismiss = () => {
        setInputValue('');
        setValidation(false);
        setFormSubmitted(false); 
    }
    return (
        <>
            <div className={`container ${formSubmitted && !validation ? 'active' : ''}`}>
                <div className="left-column">
                    <h1>Stay updated!</h1>
                    <h3>
                        Join 60.000+ product managers receiving monthly updates
                        on:
                    </h3>
                    <ul>
                        <li>
                            <img
                                className="icon-success"
                                src={IconSuccess}
                                alt=""
                            />
                            <p>Product discovery and building what matters</p>
                        </li>
                        <li>
                            <img
                                className="icon-success"
                                src={IconSuccess}
                                alt=""
                            />
                            <p>Measuring to ensure updates are a success</p>
                        </li>
                        <li>
                            <img
                                className="icon-success"
                                src={IconSuccess}
                                alt=""
                            />
                            <p>And much more!</p>
                        </li>
                    </ul>
                    <Form handleSubmit={handleSubmit} handleInputChange={handleInputChange} validation={validation} inputValue={inputValue}/>
                </div>
                <div className="right-column">
                    <img className="right-img" src={RightImg} alt="" />
                    <img className="right-img-mobile" src={RightImgMobile} alt="" />
                </div>
            </div>
            <div className={`container-success ${formSubmitted && !validation ? '' : 'active'}`}>
                <img src={IconSuccess} alt="" />
                <h2>Thanks for subscribing!</h2>
                <p>
                    A confimartion email has been sent to{" "}
                    <span className="bold-email">
                        {inputValue}
                    </span>
                    . Please open it and click the button inside to confirm your
                    subscription.
                </p>
                <button onClick={handleDismiss} className="dismiss-btn">Dismiss message</button>
            </div>
        </>
    );
}

export default App;
