// import React, { useState} from "react";
// const SimpleInput = (props) => {
//   const [name, setName] = useState("");
//   const [isUserTouch, setIsUserTouch] = useState(false)

//   const IsValidName = name.trim() !== ''
//   const isShowInvalid = !IsValidName && isUserTouch
//   const changeInputNameHandler = (event) => {
//     setIsUserTouch(true)
//     setName(event.target.value);
//   };
//   const submitFormHandler = (event) => {
    
//     // Dalam melakukan submit nilai pada form, ada 2 cara umum
//     // Yaitu menggunakan state atau mengambil elemen DOM input

//     /*
//     Jika kita ingin memvalidasi setiap keystroke yg ditekan maka kita gunakan state
//     Tapi jika kita hanya memastikan nilai yang akan di submit gunakan useRef
//     Dan dengan state, kita juga tidak mengganggu semantic dari React, dalam hal
//     mengatur ulang nilai DOM.
    
//     memakai state kita bisa setName('')
//     tapi pakai ref kita harus mengubah DOM scr langsung inputName.current.value = ''
//     */
//     event.preventDefault();
//     if(!IsValidName){
//       setIsUserTouch(true)
//       return
//     }
//     setName('')
//     setIsUserTouch(false)
//   }
//   const blurInputHandler = () => {
//     if(!IsValidName)setIsUserTouch(true)
//   }
//   return (
//     <form onSubmit={submitFormHandler}>
//       <div className="form-control">
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={changeInputNameHandler}
//           onBlur={blurInputHandler}
//         />
//       </div>
//       {isShowInvalid && <p>Please Enter Correct Name</p> }
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;
