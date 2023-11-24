import { memo } from "react";

function TimerText({isTimerStarted}){
    return(
        <p>
            {console.log("RENDER!!!!!!")}
            Le Timer est {isTimerStarted ? 'démarré' : 'arrété'}
        </p>

    );
}
export default memo(TimerText); //Mitovy amle atsy amn Timer displayTimerText nataoko comentaire