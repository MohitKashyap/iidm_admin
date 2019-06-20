import { userService } from '../_services';
import { history } from '../_helpers';

export const followupAction = {
    getFollowup,
    getFollowupById,
    onChangeProps,
    editFollowupInfo,
    createFollowup,
    deleteFollowupById
};
function getFollowup() {
    return dispatch => {
        let apiEndpoint = 'followups';
        userService.get(apiEndpoint)
            .then((response) => {
                console.log(response);
                dispatch(changeFollowupsList(response.data.data));
            }).catch((err) => {
                console.log("Error");
                console.log(err);
            });
    };
}

function createFollowup(payload, callback) {
    return dispatch => {
        let apiEndpoint = 'followups';
        userService.post(apiEndpoint, payload)
            .then((response) => {
                dispatch(createFollowupInfo());
                // history.push('/register');
                callback();
            })
    }
}

function getFollowupById(id) {

    return dispatch => {
        let apiEndpoint = 'followups/' + id;
        userService.get(apiEndpoint)
            .then((response) => {
                dispatch(editFollowupsDetails(response.data.data));
            })
    };
}

function onChangeProps(props, value) {
    return dispatch => {
        dispatch(handleOnChangeProps(props, value));
    }
}

function editFollowupInfo(id, payload) {
    return dispatch => {
        let apiEndpoint = 'followups/' + id;
        userService.put(apiEndpoint, payload)
            .then((response) => {
                dispatch(updateFollowup());
                history.push('/followup');
            });
    }
}

function deleteFollowupById(id) {
    return dispatch => {
        let apiEndpoint = 'followups/' + id;
        userService.deleteDetail(apiEndpoint)
            .then((response) => {
                dispatch(deleteFollowupsDetails());
                dispatch(followupAction.getFollowup());
            })
    };
}

export function changeFollowupsList(followup) {
    return {
        type: "FETECHED_ALL_FOLLOWUP",
        followup: followup
    }
}

export function handleOnChangeProps(props, value) {
    return {
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editFollowupsDetails(followup) {
    return {
        type: "FOLLOWUP_DETAIL",
        id: followup._id,
        name: followup.name,
        mobile: followup.mobile,
        email: followup.email,
        address: followup.address,
        dob: followup.dob,
        gender: followup.gender,
        qualification: followup.qualification,
        working: followup.working,
        experience: followup.experience,
        organisation: followup.organisation,
        service: followup.service,
        CreatedOn: followup.createdAt
    }
}

export function updateFollowup() {
    return {
        type: "FOLLOWUP_UPDATED"
    }
}

export function createFollowupInfo() {
    return {
        type: "FOLLOWUP_CREATED_SUCCESSFULLY"
    }
}

export function deleteFollowupsDetails() {
    return {
        type: "DELETED_FOLLOWUP_DETAILS"
    }
}