import { RootState } from "../../../app/store";
import { SelectedEmailState } from ".";

export const selectedMailSelector = (state: RootState): SelectedEmailState => state.selectedEmail;
