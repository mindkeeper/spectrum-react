import profileActions from "../redux/actions/profile"

export const clearState = dispatch => {
  dispatch(profileActions.profileReset())
}