import arrow_up from '../assets/arrow_up.svg'
import TechBox from '../components/TechBox'
import BtnBox from './BtnBox';
import { useState } from 'react';

const Card = ({site, tech}) => {
    const [isVisible,setIsVisible] = useState(false)
    
    return ( 
        <div className='border'>
            <div className='card-lg'>
                <img src={site.img} alt={`${site.title} image`} className='card-lg_img'/>
                <div className={`${isVisible ? 'display-slide' : ''} card-lg_slide`}>
                    <h3>{site.title}
                        <img src={arrow_up} alt='arrow up' onClick={() => setIsVisible(prev => !prev)}/>
                    </h3>
                    <TechBox currentTech={site.tech} tech={tech}/>
                    <BtnBox site={site.site} repo={site.repo} title={site.title}/>
                </div>
            </div>
        </div>
     );
}
 
export default Card;