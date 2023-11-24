import style from "./Timer.module.css";

function Button({onClick, isTimerStarted, type='button' ,...props}){
    return(
        <button type={type} className={`${style['clock-btn']} ${style[`clock-btn-${isTimerStarted ? 'stop' : 'start'}`]}`} onClick={onClick}>{isTimerStarted ? 'Arrêter' : 'Démarrer' } {/*console.log("biuton!!!!")*/}</button> 
                
    );
};
export default Button;