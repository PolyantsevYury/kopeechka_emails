import React from 'react';
import UploadEmails from './UploadEmails';
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {uploadFile} from "../../redux/upload-reducer";

class UploadContainer extends React.Component {
    render () {
        let token = localStorage.getItem('token');
        const onSubmit = (formData) => {
            this.props.uploadFile(formData.comment, token, formData.emails_file)
        };
        return (
            <div>
                <UploadForm onSubmit={onSubmit} upload={this.props.upload} />
            </div>
        )
    }
}

const UploadForm = reduxForm({form: 'uploadEmails'})(UploadEmails);

const mapStateToProps = (state) => ({
    upload: state.upload
});

export default connect(mapStateToProps, {uploadFile})(UploadContainer)