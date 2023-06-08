/** @format */
import { create } from "zustand";

const useApplicationsStore = create((set) => ({
	applications: [],

	setApplications: (newApplications) => {
		set({ applications: newApplications });
	},
}));

const useDeathInfoStore = create((set) => ({
	deathInfo: [],

	setDeathInfo: (newDeathInfo) => {
		set({ deathInfo: newDeathInfo });
	},
}));

export { useApplicationsStore, useDeathInfoStore };
