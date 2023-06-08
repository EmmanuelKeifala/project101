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

const useBirthInfoStore = create((set) => ({
	birthInfo: [],

	setBirthInfo: (newBirthInfo) => {
		set({ birthInfo: newBirthInfo });
	},
}));

export { useApplicationsStore, useDeathInfoStore, useBirthInfoStore };
