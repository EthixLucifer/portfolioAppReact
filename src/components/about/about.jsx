import "./about.css"
import vectorCharacter from "../../img/character.png"
import badge from "../../img/award.png"
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={vectorCharacter} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">I'm a coder who spends my days writing code, reading about Cyber-security, and working on side projects that teach me new things. I enjoy building and tinkering with different ideas in order to see how they work and what I can learn from them.
                </p>
                <p className="a-desc">
                    So, enough of this Ethix, my real name is Rohit Jambhulkar. I recently completed my three-year diploma in information technology with a 90% aggregate. Diploma pass-out students are taught industry-related subjects that make them industry-ready even before they take admissions in Engineering.<br></br>

                    <br></br>When I received my results and started to prepare a list of colleges I wanted to apply to, a sudden thought popped up in my mind quoting, <i>"Yaar, everyone does engineering; shouldn't I do something different."</i> Therefore, instead of taking admission in engineering for three continuous years (lateral entry) learning subjects with outdated curriculam, I decided to dedicate that time to improving on a skill I'm already good at.<br></br>

                    <br></br>
                    As a result I am currently a blockchain developer creating project smart contracts and applying my cybersecurity knowledge to make smart contracts secure. Blockchain is already changing how the internet works, and I surely don’t want to miss this opportunity of becoming part of the internet evolution.
                </p>
                <div className="a-award">
                    <img src={badge} alt="" className="a-award-img" />
                    <div className="a-awards-texts">
                        <h4 className="a-award-title">Solidity | JavaScript | Java | C/C++ | Kali Linux | Technical Writing |  </h4>
                        <p className="a-award-desc">
                            I'm a Solidity programmer specializing in the smart contract language for Ethereum. I am learning to develop web applications and D-apps using React.js and connect smart contracts using web3.js. I use Kali Linux tools to find vulnerabilities and possible exploits in Web Apps. With my hobby in technical content writing, I love to deliver simplified write-ups on complex topics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
