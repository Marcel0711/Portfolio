import mail from '../assets/mail.svg'
import github from '../assets/github.svg'
import leetCode from '../assets/leet.svg'
import { CSSTransition } from 'react-transition-group'

const InfoBox = ({ins}) => {
    return ( 
        <CSSTransition classNames='tr_box' unmountOnExit timeout={3000} in={ins}>
        <div className="info-box border">
            <ul>
                <li>
                    <img src={mail} alt="email icon"/>
                    <span>marcelpikul2@gmail.com</span>
                </li>
                <li>
                    <img src={github} alt="github icon"/>
                    <a href="https://github.com/Marcel0711" target="_blanc">Github</a>
                </li>
                <li>
                    <img src={leetCode} alt="leetcode icon"/>
                    <a target="_blanc" href="https://leetcode.com/Marcel0711/">LeetCode</a>
                </li>
            </ul>
        </div>
        </CSSTransition>
     );
}
 
export default InfoBox;