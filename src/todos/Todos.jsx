import { addDoc, collection, getDocs , deleteDoc , doc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import {  onAuthStateChanged , signOut   } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import React, { useRef, useState, useEffect } from 'react';
import { auth, db } from "../Config/config";
import { useNavigate } from "react-router-dom";

function Todos() {
  let [todoArr, setArr] = useState([]);
  let inputValue = useRef();
  let navigate = useNavigate()

  // Fetch data from Firestore
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          console.log(uid);
          
          getData();
          // ...
        } else {
          navigate("/login")
        }
      });
}, [])
  
  

  async function getData() {
    const querySnapshot = await getDocs(collection(db, "todos"));
    const todos = [];
    querySnapshot.forEach((doc) => {
      todos.push({ id: doc.id, ...doc.data() });  
    });
    setArr(todos);  
  }

 

  // Add todo function
  async function addTodo(event) {
    event.preventDefault();
    if (inputValue.current.value === "") {
      alert('Please enter a value');
    } else {
      try {
        
        const docRef = await addDoc(collection(db, "todos"), {
          todo: inputValue.current.value
        });

        console.log("Document written with ID: ", docRef.id);

        // Add todo
        setArr([...todoArr, { id: docRef.id, todo: inputValue.current.value }]);

      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

    inputValue.current.value = "";  
  }







  // Delete todo function 
  function del(index) {
    todoArr.splice(index, 1);
    setArr([...todoArr]);
    
  }






  // Edit todo function 
  function edit(index) {
    let updateArr = prompt('Update array');
    todoArr.splice(index, 1, { ...todoArr[index], todo: updateArr });
    setArr([...todoArr]);
  }






//   signout 
function handleSignOut(){
    signOut(auth).then(() => {
        navigate("/login")
      }).catch((error) => {
console.log(error);
      });
}







  return (
    <>
      <h1 className="text-center text-[2rem] mt-5">Todo Web</h1>
      <div className="mx-auto w-[60rem] text-center mt-4 bg-[#1f2937] p-5">
        <form onSubmit={addTodo} className='w-[50rem] mx-auto'>
          <div className='w-[41rem] bg-white rounded-lg mx-auto'>
            <input
              type="text"
              className="text-center p-2 w-[35rem]"
              placeholder="Enter todo"
              ref={inputValue}
            />
            <button className='w-[6rem] bg-[#6366f1] py-2 px-3'>Add</button>
          </div>
        </form>
        <div>
          {todoArr.map((item, index) => (
            <div key={item.id || index}>
              <div className="display mt-[2rem] d-flex text-center justify-content-center align-items-center gap-2 ">
                <div className="flex justify-center gap-2 w-[40rem] mx-auto">
                  <div>
                    <p className="res">{item.todo}</p>
                  </div>
                  <button
                    className="delBtn w-[6rem] bg-[red] py-2 px-3 rounded-sm"
                    onClick={() => del(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="editBtn w-[6rem] bg-[green] py-2 px-3 rounded-sm"
                    onClick={() => edit(index)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
         <button className="w-[6rem] bg-[red] py-2 px-3 rounded-lg block mx-auto hover:bg-[black] hover:text-[white] mt-3" onClick={handleSignOut}>Signout</button> 
         </div>
    </>
  );
}

export default Todos;
