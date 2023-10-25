import { useState } from "react"
import ThemeSelector from '../components/ThemeSelector'
import InfoBox from '../components/InfoBox'

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
                {isActive[0] && <ThemeSelector themes={themes} setIsActive={() => setIsActive([false, false])}/>}
            </div>
            <div>
                <button className='btn border' onClick={() => showContent(1)}>Info</button>
                {isActive[1] && <InfoBox/>}
            </div>
        </header>
     );
}
 
export default Header;