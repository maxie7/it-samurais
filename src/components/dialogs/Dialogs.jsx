import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';
import { Redirect } from "react-router-dom";
import AddMessageForm from './addMessageForm/AddMessageForm';

const Dialogs = (props) => {

  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
  let messagesElements = state.messages.map( message => <Message message={message.message} key={message.id} /> );

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) return <Redirect to='/login' />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        { dialogsElements }
      </div>

      <div className={s.messages}>
        <div>{messagesElements}</div>

      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  )
}

export default Dialogs;
