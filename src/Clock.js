function Clock({time, ...props}){

    function numberToTime(nbr){
        const Time=Number(nbr);
        const Heure=Math.floor(Time / 3600);
        const Minu=Math.floor(Time % 3600 /60);
        const sec=Math.floor(Time %3600 %60);
        
        const dispH= Heure<10 ? '0'+Heure : Heure;
        const dispM= Minu<10 ? '0'+Minu : Minu;
        const dispS= sec<10 ? '0'+sec : sec; 
         return(`${dispH}:${dispM}:${dispS}`);
    }
    

    return(
        <span>
                {numberToTime(time)}
        </span>
    );

}
export default Clock;