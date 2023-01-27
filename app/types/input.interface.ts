import { Control } from 'react-hook-form'

import { IAuthFormData } from './auth.interface'

export interface IInput {
	//FIXIT don`t use any!!!
	control: Control | any
	name: string
	placeholder?: string
	secureTextEntry?: boolean
	rules?: {
		required?: string
		min?: {
			value: number
			message: string
		}
		max?: {
			value: number
			message: string
		}
		minLength?: {
			value: number
			message: string
		}
		maxLength?: {
			value: number
			message: string
		}
		pattern?: {
			value: RegExp
			message: string
		}
		validate?: void | any
	}
}
