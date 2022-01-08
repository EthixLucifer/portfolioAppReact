import "./Contact.css"
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Twitter from "../../img/twitter.png"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_l95nup9', 'template_99jshho', formRef.current, 'user_HeAG1Fnn68GFs6O04VR5T')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="c">
            <div className="c-bg">
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Wanna Talk? Lets Connect</h1>
                        <div className="c-icon-flex">
                            <div className="c-info">
                                <div className="c-info-item">
                                    <a href="https://github.com/EthixLucifer" target="_blank" rel="noreferrer">
                                        <img src={Github} alt="" className="c-icon" />
                                    </a>
                                </div>
                            </div>
                            <div className="c-info">
                                <div className="c-info-item">
                                    <a href="https://www.linkedin.com/in/ethixlucifer" target="_blank" rel="noreferrer">
                                        <img src={Linkedin} alt="" className="c-icon" />
                                    </a>
                                </div>
                            </div>
                            <div className="c-info">
                                <div className="c-info-item">
                                    <a href="https://www.instagram.com/ethixlucifer" target="_blank" rel="noreferrer">
                                        <img src={Instagram} alt="" className="c-icon" />
                                    </a>
                                </div>
                            </div>
                            <div className="c-info">
                                <div className="c-info-item">
                                    <a href="https://twitter.com/EthixLucifer" target="_blank" rel="noreferrer">
                                        <img src={Twitter} alt="" className="c-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>Got Something Intresting?</b> Get in touch. I'm Always looking out to make new friends😉
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="user_name" />
                            <input type="Subject" placeholder="Subject" name="user_subject" />
                            <input type="Email" placeholder="Email" name="user_email" />
                            <textarea name="" rows="7" placeholder="Message" name="user_message"></textarea>
                            <button>Submit</button>
                            <div className="c-m-done">
                                {done && "I'll Reach Out to You Soon......"}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
