import "./Footer.scss"

type props = {
    taskName: string;
    setTaskName:(name:string)=>void;
    addJob:()=> void
}

export default function Footer({taskName, setTaskName, addJob}: props) {
    
  return (
    <div className='containerFooter'>
        <label>Add to the todo list</label>
        <div className='addFunction'>
            <input type='text ' placeholder='Add job' onChange={e => setTaskName(e.target.value)} />
            <button onClick={addJob}>ADD ITEM</button>
        </div>
      
    </div>
  )
}
