export interface ReportType {
	country?: {
		value?: string,
		label?: string
	},
	tripDuration?: string,
	tripStart?: string,
	tripDescription?: string,
	friendsList?: string[],
	tripDestination?: string,
	data?: any,
	id?: number,
	handleDeleteClick?: any,
	handleReportClick?: any
}

export interface ReportTypeProps {
	data: ReportType
	handleDeleteClick?: any,
	handleReportClick?: any
}

export interface ReportListType {
	reports: Array<ReportType>
	handleDeleteClick?: (id: number) => void
}

export interface FormInputType {
	value?: string | string[],
	onChangeInput?: any,
	label?: string,
	id?: string,
	ids?: string[],
	name?: string
}