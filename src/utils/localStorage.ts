const STORAGE_KEY = 'reports';

export const getReportsFromStorage = (): any => JSON.parse(<string>localStorage.getItem(STORAGE_KEY)) || [];

export const addReportToStorage = (newReport: {}[]) => {
	let savedReports = getReportsFromStorage() || [];
	savedReports = newReport.concat(savedReports);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(savedReports));
};

export const removeReportFromStorage = (id: number) => {
	let savedReports = getReportsFromStorage();
	savedReports = savedReports.filter((report: { id: number, title: string, body: string }) => report.id !== id);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(savedReports));
};