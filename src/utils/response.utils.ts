import serverResponseStatus from "./constants/serverResponseStatus.constant";

class ResponseUtils {
    public buildResponse(response: any) {
        return {
            ...response,
            status: serverResponseStatus.RESPONSE_STATUS_SUCCESS,
            statusCode: serverResponseStatus.OK
        }
    }
}

export default new ResponseUtils()