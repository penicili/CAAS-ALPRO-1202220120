import React, { useState } from 'react';
function TaskList(){

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("");

    const [members, setMembers] = useState([])
    const [newMember, setNewMember] = useState("")

    const [selectedMember, setSelectedMember] = useState('');
    const [dueDate, setDueDate] = useState('');

// member
    function handleInputMember(event){
        setNewMember(event.target.value);
    }

    function addMember(){
        if(newMember.trim() !== ""){
            setMembers (m => [...m, newMember])
            setNewMember("")
        }
    }

// task
    function handleInputTask(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function addAdd(){
        if (newTask && selectedMember && dueDate){
            const newTaskItem = {
                title: newTask,
                member: selectedMember,
                due: dueDate
            };
            setTasks([...tasks, newTaskItem])
            setNewTask('')
            setSelectedMember('')
            setDueDate('')
        }
    }
    

    function handleSelectMember(event){
        setSelectedMember(event.target.value)
    }

    function handleDueDate(event){
        setDueDate(event.target.value)
    }

    function delTask(index){
        const updatedTask = tasks.filter((_, i) => i!== index)
        setTasks(updatedTask)
    }





    return(
        <div className='container-main'>
            <h1>Task List</h1>
            <form onSubmit={handleInputTask}>
                <input
                    type='text'
                    placeholder='Masukkan Task'
                    value={newTask}
                    onChange={handleInputTask}
                    />
                <select
                value={selectedMember}
                onChange={handleSelectMember}
                required
                >
                    <option value="" disabled>Select Member</option>
                    {members.map((member, index) =>(
                        <option key={index} value = {member}>{member}</option>
                    ))}
                </select>
                <input type="date" 
                value={dueDate}
                onChange={handleDueDate}/>
                <button
                onClick={addAdd}
                >Tambah Task</button>
            </form>


            {/* <div className='topBar'>
                <input
                type='text'
                placeholder='Masukkan Task'
                value={newTask}
                onChange={handleInputTask}
                />
                <button 
                className='button-add'
                onClick={addTask}>
                    New
                </button>
            </div> */}
            <ol>
                {/* {tasks.map((task, index) =>
                        <li key={index}>
                            <span className='name-task'>{task}</span>
                            <div className='buttonsall'>
                                <button className='button-delete'
                                onClick={() => delTask(index)}>
                                    Delete
                                </button> */}

                                {/* <button className='button-move'
                                onClick={() => moveUp(index)}
                                >
                                    UP!
                                </button>

                                <button className='button-move'
                                onClick={() => moveDown(index)}
                                >
                                    DOWN!
                                </button> */}
                            {/* </div>
                        </li> */}
                {/* )} */}
                {tasks.map((task, index) => (
                        <li key={index}>
                            <strong>{task.title}</strong> - Member: {task.member} - Deadline: {task.due}
                        </li>)  )}
            </ol>
            <div className='member'>
                <input type="text" 
                placeholder='masukkan member baru'
                value={newMember}
                onChange={handleInputMember}/>
                <button className='button-add'
                onClick={addMember}>
                    Tambah Member
                </button>
            </div>
            <ol>
                {members.map((member, index) =>
                        <li key={index}>
                            <span className='name-task'>{member}</span>
                    </li>)}
            </ol>
        </div>
    )
};
export default TaskList