import github from '../assets/github.svg'

const BtnBox = ({repo, site, title}) => {
    return ( 
        <div className='btn-box'>
            <a className='btn border' target='_blank' href={repo}>
                <img src={github} alt={`${title} github`}/>
                <span>Github</span>
            </a>
            <a className='btn border' style={site === '-' ? {pointerEvents:'none'} : {}} href={site} target="_blank">
                Podgląd
            </a>
        </div>
     );
}
 
export default BtnBox;