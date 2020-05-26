import React from 'react';
import {Form, Button, Upload, Input, Alert} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {uploadFile} from "../../redux/upload-reducer";
import {connect} from "react-redux";

class UploadForm extends React.Component {

    state = {
        fileList: []
    };

    normFile = e => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    onFinish = values => {
        let token = localStorage.getItem('token');
        this.props.uploadFile(values.comment, token, values.file[0].originFileObj)
    };

    dummyRequest({ file, onSuccess }) {
        setTimeout(() => {
            onSuccess("ok");
        }, 0);
    }

    handleChange = info => {
        let fileList = [...info.fileList];

        fileList = fileList.slice(-1);

        this.setState({ fileList });
    };


    render() {
        return (
            <Form
                size={"large"}
                name="validate_other"
                onFinish={this.onFinish}
            >
                <Form.Item label="Исключения">
                    <Form.Item name="comment" noStyle>
                        <Input placeholder="mail.ru, yandex.ru"/>
                    </Form.Item>
                </Form.Item>

                <Form.Item name='file' getValueFromEvent={this.normFile}>
                    <Upload name="file" onChange = {this.handleChange} customRequest={this.dummyRequest} fileList={this.state.fileList} listType="picture">
                        <Button>
                            <UploadOutlined/> Загрузить файл
                        </Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        span: 12,
                        offset: 6,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Отправить
                    </Button>
                </Form.Item>
                { this.props.upload.isSuccess === true && <Alert message={"Файл отправлен"} type="success" showIcon /> }
                { this.props.upload.isSuccess === false && <Alert message={"Ошибка"} type="warning" showIcon /> }
            </Form>
        )
    }
};

const mapStateToProps = (state) => ({
    upload: state.upload
});

export default connect(mapStateToProps, {uploadFile})(UploadForm)