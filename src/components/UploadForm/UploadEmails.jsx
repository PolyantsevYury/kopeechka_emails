import React from "react";
import { Field } from "redux-form";
import s from './UploadEmails.module.css';
import {Alert} from "antd";

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({
                       input: { value: omitValue, onChange, onBlur, ...inputProps },
                       meta: omitMeta,
                       ...props
                   }) => {
    return (
        <input
            className={s.form_upload}
            onChange={adaptFileEventToValue(onChange)}
            onBlur={adaptFileEventToValue(onBlur)}
            type="file"
            {...props.input}
            {...props}
        />
    );
};

class UploadEmails extends React.Component {
    render() {
        return (
            <form className={s.form} onSubmit={this.props.handleSubmit}>
                <Field className={s.form_input} component={"input"} type={"text"}
                       name={"comment"} placeholder={"Исключения"}/>
                <Field component={FileInput} type={"file"}
                       name={"emails_file"} />
                <button disabled={this.props.upload.uploadingInProgress} className={s.form_button + " " + (this.props.upload.uploadingInProgress ? s.disabled : "")}>
                    Отправить файл
                </button>
                { this.props.upload.isSuccess === true && <Alert message={"Файл отправлен"} type="success" showIcon /> }
                { this.props.upload.isSuccess === false && <Alert message={"Ошибка"} type="warning" showIcon /> }
                </form>
        )
    }
}

export default UploadEmails;