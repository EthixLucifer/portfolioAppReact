import "./intro.css"
import Me from "../../img/me.png"


const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hey There, I am </h2>
                    <h1 className="i-name">Ethix Jambhulkar</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Blockchain Developer</div>
                            <div className="i-title-item">Penetration Tester</div>
                            <div className="i-title-item">Technical Content Creator</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I am a solidity developer with a keen interest in cybersecurity and I am dedicated in becoming involved with blockchain. I want to learn how to help people use the technology that will power the next generation of the web.
                    </p>
                </div>
                <svg
                    width="75"
                    height="75"
                    className="i-scroll"
                    fill="none"
                    stroke="black"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill="#6563ff" d="M12,6.0009766c-0.276123,0-0.5,0.223877-0.5,0.5v3.0006104c0.0001831,0.2759399,0.223999,0.4995728,0.5,0.4993896h0.0005493c0.276001-0.0001221,0.4996338-0.223999,0.4994507-0.5v-3C12.5,6.2248535,12.276123,6.0009766,12,6.0009766z M12,2C8.1340332,2,5,5.1340332,5,9v6c0.0046997,3.8640747,3.1359253,6.9953003,7,7c3.8640747-0.0046997,6.9953003-3.1359253,7-7V9C19,5.1340332,15.8659668,2,12,2z M18,15c0,3.3137207-2.6862793,6-6,6s-6-2.6862793-6-6V9c0.0036011-3.3121948,2.6878052-5.9963989,6-6c3.3121948,0.0036011,5.9963989,2.6878052,6,6V15z" />
                </svg>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
