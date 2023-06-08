/** @format */
import create from "zustand";
const useApplicationsStore = create((set) => ({
	applications: [],

	setApplications: (newApplications) => {
		set({ applications: newApplications });
	},
}));
export default useApplicationsStore;
