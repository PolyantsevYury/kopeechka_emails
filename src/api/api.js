import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.kopeechka.store/',
});

export const authAPI = {
    me(token) {
        return instance.get('user-get?token=' + token)
    }
};

export const tableAPI = {
    getTarifData(token) {
        return instance.get('mailbox-zones?popular=1&token=' + token)
    },

    getStatusData(token) {
        return instance.get('mailbox-uploaded-table?token=' + token + '&type=1')
    }
};

export const uploadAPI = {
    uploadFile(comment, type, token, emails_file) {
        let formData = new FormData();
        formData.append("comment", comment);
        formData.append("type", type);
        formData.append("token", token);
        formData.append("emails_file", emails_file);
        return (
            instance.post('mailbox-upload?type=1', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        )
    }
};