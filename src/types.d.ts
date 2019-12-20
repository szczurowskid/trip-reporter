export interface ReportType {
	country?: {
		value?: string,
		label?: string
	},
	tripDuration?: string,
	tripStartDate?: string,
	tripDescription?: string,
	friendsList?: string[],
	tripDestination?: string,
	data?: any,
	id?: number,
	handleDeleteClick?: any,
	handleReportClick?: any
}

interface SelectBoxValue {
	value?: string,
	label?: string
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
	name?: string,
	title?: string
	options?: SelectBoxValue
}

export interface SelectBoxType {
	value?: SelectBoxValue,
	onChangeInput?: any,
	id?: string,
	name?: string,
	title?: string,
	placeholder?: string,
	options?: Array<SelectBoxValue>
}

export interface ButtonType {
	onClick: any,
	label?: string,
	variant?: string
}