
const DeleteTask=(props)=>{
    return <>
    <button id='delbtn'onClick={() => props.deleteTask(props.id)}>X</button>
    </>
}

export default DeleteTask;