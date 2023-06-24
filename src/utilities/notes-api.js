import sendRequest from "./send-request";

const BASE_URL = '/api/notes';

export function addNote(newNote) {
    return sendRequest(`${BASE_URL}/new`, 'POST', newNote);
}