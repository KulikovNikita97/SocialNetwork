import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";
import s from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {

    return (
        <form onSubmit={handleSubmit}>

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}

            <div>
                <b>Full name</b>:
                {createField("Your full name", "fullName", [], Input)}
            </div>

            <div>
                <b>Looking for a job</b>:
                {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
            </div>

            <div>
                <b>My professional skills</b>:
                {createField("Write about your professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>


            <div>
                <b>About me</b>:
                {createField("Write something about yourself: hobbies etc.", "aboutMe", [], Textarea)}
            </div>

            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={s.contact}>
                        <b>{key}:
                            {createField(key, "contacts." + key, [], Input)}
                        </b>
                    </div>
                })}
            </div>

            <div>
                <button className={s.button_save}>
                    Save
                </button>
            </div>
        </form>
    )
}


const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;