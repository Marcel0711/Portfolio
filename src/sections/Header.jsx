import { useState } from "react"
import ThemeSelector from '../components/ThemeSelector'
import { CSSTransition } from "react-transition-group"

const Header = ({themes}) => {
    const [isActive,setIsActive] = useState([false, false])
   
    const showContent = (index) => {
        const temp = isActive.map((item, i) => {
            if(i === index){
                return !item
            }else{
                return false
            }
        })
        setIsActive(temp)
    }

    return ( 
        <header>
            <div>
                <button className='btn border' onClick={() => showContent(0)}>Motyw</button>
                <ThemeSelector themes={themes} setIsActive={() => setIsActive([false, false])} ins={isActive[0]}/>
            </div>
        </header>
     );
}
 
export default Header;
