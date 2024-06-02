import { StatusCodes } from "http-status-codes";

const serverResponseStatus = {
  RESPONSE_STATUS_FAILURE: 'failure',
  RESPONSE_STATUS_SUCCESS: 'success',
  OK: StatusCodes.OK,
  INTERNAL_SERVER_ERROR: StatusCodes.INTERNAL_SERVER_ERROR,
  NOT_FOUND: StatusCodes.NOT_FOUND,
  FAILED: StatusCodes.BAD_REQUEST,
  BAD_REQUEST: StatusCodes.BAD_REQUEST,
};

export default serverResponseStatus;
