import React from 'react';
import s from './../Dialogs.module.css';

// const Message = (props) => {


// // let newMessageElement = React.createRef();

// // let sendMessage = () => {
// //   let text = newMessageElement.current.value;
// //  return text
// // }

//   return (
//     <div className={s.dialog}>{props.message}
//      {/* <div>
//      <textarea placeHolder='Conversation!' 
//                ref={newMessageElement} />
//           </div>
//           <div>
//             <button onClick= {sendMessage}>
//               Send
//             </button>
//       </div> */}
//     </div>
//   )
// }

const Message = ({ message }) => {
  return (
    <div className={s.dialog}>
      {message}
    </div>
  )
}

export default Message;