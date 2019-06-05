import { userService } from '../_services';
import { history } from '../_helpers';

export const registrationAction = {
    getRegistration,
    getRegistrationById,
    onChangeProps,
    editRegistrationInfo,
    createRegistration,
    deleteRegistrationById
};
function getRegistration() {
    return dispatch => {
        let apiEndpoint = 'vendors';
        userService.get(apiEndpoint)
            .then((response) => {
                console.log(response);
                dispatch(changeRegistrationsList(response.data.data));
            }).catch((err) => {
                console.log("Error");
                console.log(err);
            })
    };
}

function createRegistration(payload, callback) {
    return dispatch => {
        let apiEndpoint = 'vendors/';
        userService.post(apiEndpoint, payload)
            .then((response) => {
                dispatch(createUserInfo());
                // history.push('/register');
                callback();
            })
    }
}

function getRegistrationById(id) {

    return dispatch => {
        let apiEndpoint = 'vendors/' + id;
        userService.get(apiEndpoint)
            .then((response) => {
                dispatch(editRegistrationsDetails(response.data.data));
            })
    };
}

function onChangeProps(props, value) {
    return dispatch => {
        dispatch(handleOnChangeProps(props, value));
    }
}

function editRegistrationInfo(id, payload) {
    return dispatch => {
        let apiEndpoint = 'vendors/' + id;
        userService.put(apiEndpoint, payload)
            .then((response) => {
                dispatch(updatedUserInfo());
                history.push('/registrations');
            })
    }
}

function deleteRegistrationById(id) {
    return dispatch => {
        let apiEndpoint = 'vendors/' + id;
        userService.deleteDetail(apiEndpoint)
            .then((response) => {
                dispatch(deleteRegistrationsDetails());
                dispatch(registrationAction.getRegistration());
            })
    };
}

export function changeRegistrationsList(registration) {
    return {
        type: "FETECHED_ALL_REGISTRATION",
        registration: registration
    }
}

export function handleOnChangeProps(props, value) {
    return {
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editRegistrationsDetails(registration) {
    return {
        type: "REGISTRATION_DETAIL",
        id: registration._id,
        name: registration.name,
        mobile: registration.mobile,
        email: registration.email,
        address: registration.address,
        dob: registration.dob,
        gender: registration.gender,
        qualification: registration.qualification,
        working: registration.working,
        experience: registration.experience,
        organisation: registration.organisation,
        service: registration.service,
        CreatedOn: registration.createdAt
    }
}

export function updatedUserInfo() {
    return {
        type: "USER_UPDATED"
    }
}

export function createUserInfo() {
    return {
        type: "USER_CREATED_SUCCESSFULLY"
    }
}

export function deleteRegistrationsDetails() {
    return {
        type: "DELETED_REGISTRATION_DETAILS"
    }
}