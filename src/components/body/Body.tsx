import React, { useReducer } from "react";
import "./body.scss";
import Footer from "../footer/Footer"

type Job = {
  id: number;
  name: string;
  completed: boolean;
};

type State = {
  jobs: Job[];
  taskName: string;
};

type Action =
  | { type: "ADD"; payload: Job }
  | { type: "DELETE"; payload: number }
  | { type: "SET_TASK_NAME"; payload: string }
  | { type: "TOGGLE_COMPLETED"; payload: number };

const initialJob: State = {
  jobs: [
    { id: 1, name: "Code a todo list", completed: true },
    { id: 2, name: "Learn React", completed: true },
  ],
  taskName: (""),
};
function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD":
      return { ...state, jobs: [...state.jobs, action.payload], taskName: "" };
    case "DELETE":
      return {
        ...state,
        jobs: state.jobs.filter((item) => item.id !== action.payload),
      };
    case "SET_TASK_NAME":
      return { ...state, taskName: action.payload };
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        jobs: state.jobs.map((job) =>
          job.id === action.payload
            ? { ...job, completed: !job.completed }
            : job
        ),
      };
    default:
      return state;
  }
}

export default function Body() {
  const [state, dispatch] = useReducer(todoReducer, initialJob);
  const addJob = () => {
    if (!state.taskName) return;
    const newJob: Job = {
      id: state.jobs.length + 1,
      name: state.taskName,
      completed: false,
    };
    dispatch({ type: "ADD", payload: newJob });
    
  };
  const deleteJob = (id: number) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const setTaskName = (name: string) => {
    dispatch({ type: "SET_TASK_NAME", payload: name });
  };

  return (
    <div className="containerBody">
      <div className="body">
        {state.jobs.map((item) => (
          <div className="mission" key={item.id}>
            <p className={item.completed ? "completed" : ""}>{item.name}</p>
            <div className="icon">
              <input
                type="checkbox"
                className="checkInput"
                checked={item.completed}
                onChange={() =>
                  dispatch({ type: "TOGGLE_COMPLETED", payload: item.id })
                }
              />
              <i
                className="fa-solid fa-trash"
                onClick={() => deleteJob(item.id)}
              ></i>
            </div>
          </div>
        ))}
        <div className="toggle">
          <p>Move done item to the end</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </div>
      <Footer
        taskName={state.taskName}
        setTaskName={setTaskName}
        addJob={addJob}
      />
    </div>
  );
}
