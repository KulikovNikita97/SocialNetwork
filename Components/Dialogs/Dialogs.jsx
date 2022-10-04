import React from 'react';
import s from './Dialogs.module.css';
import image from '../../media/twi.png';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import AddMessageForm from './AddMessageForm/AddMessageForm';


const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(d =>
    <DialogItem name={d.name} key={d.id} id={d.id} />);
  let messagesElements = props.dialogsPage.messages.map(m =>
    <Message message={m.message} key={m.id} />);

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  if (!props.isAuth)
    return <Redirect to={'/Login'} />;
    
  return (
    <div>
      <div className={s.mainTitle}>
        Okay, let's talk about your "important" things...
        <div className={s.content}>
          <img src={image} alt=""/>
        </div>
      </div>

      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
        </div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

export default Dialogs;