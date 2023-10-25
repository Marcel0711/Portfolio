const ThemeSelector = ({themes, setIsActive}) => {
    const switchTheme = (mode = false) => {
        if(mode){
            document.querySelector('body').setAttribute('data-theme', mode)
        }else{
            document.querySelector('body').removeAttribute('data-theme')
        }
        setIsActive()
    }
    
    return ( 
        <div className="theme-box border">
            {themes.map((theme,index) => (
                <button key={index} onClick={() => switchTheme(theme.theme)} style={{background: `linear-gradient(${theme.gradient})`}}></button>
            ))}
        </div>
     );
}
 
export default ThemeSelector;