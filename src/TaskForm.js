import { useId, useRef } from "react";
import Button from "./Button";

const style={
    form:{
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem 0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputGroup:{
        display:'flex',
        flexDisplay:'column',
        marginButton:'1rem',
        width: '100%',
    },
    input:{
        padding: '.5rem .8rem',
        borderRadius: 10,
        border: 'none',
        width: '100%', 
    }
};

function TaskForm({isTimerStarted, onSubmit}){
    const titleRef=useRef(null);
    const descriptionRef=useRef(null);
    const id=useId();

    const handleSubmit=(event)=>{
        event.preventDefault();
        onSubmit({
            title: titleRef.current.value,
            description: descriptionRef.current.value, 
        });
        if(isTimerStarted){
            
        titleRef.current.value=null;
        descriptionRef.current.value=null;
        }
    };
    return(
        <form onSubmit={handleSubmit} style={style.form}>
            <label>Titre: </label>
            <br />
            <input id={id} ref={titleRef} style={style.input} type="texte" required placeholder="Entrez votre tâche ici"/>
            <br />
            <label>Description : </label>
            <br />
            <textarea id={id} ref={descriptionRef} style={style.input} placeholder="Entrez la description de votre tâche ici"></textarea>
            <br />
            <Button type="submit" isTimerStarted={isTimerStarted} />
        </form>
    );
}
export default TaskForm;