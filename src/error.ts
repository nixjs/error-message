import { BaseErrorTypes } from './types'
import { BaseErrorConsts } from './consts'

export type BaseErrorType = keyof typeof BaseErrorConsts.BaseEnumifyError

export const BaseErrors: Record<BaseErrorType, BaseErrorTypes.Error<BaseErrorType>> = {
    [BaseErrorConsts.BaseEnumifyError.DATA_NOT_FOUND]: {
        type: 'DATA_NOT_FOUND',
        code: Number(BaseErrorConsts.BaseEnumifyError.DATA_NOT_FOUND),
        stringify: (message?: string) => message || 'Data not found',
        format: (message?: string) => ({
            code: BaseErrors[BaseErrorConsts.BaseEnumifyError.DATA_NOT_FOUND].code,
            message: BaseErrors[BaseErrorConsts.BaseEnumifyError.DATA_NOT_FOUND].stringify(message),
        }),
    },
    [BaseErrorConsts.BaseEnumifyError.MISSING_OR_INVALID]: {
        type: 'MISSING_OR_INVALID',
        code: Number(BaseErrorConsts.BaseEnumifyError.MISSING_OR_INVALID),
        stringify: (message?: string) => 'Missing or invalid' || message,
        format: (message?: string) => ({
            code: BaseErrors[BaseErrorConsts.BaseEnumifyError.MISSING_OR_INVALID].code,
            message: BaseErrors[BaseErrorConsts.BaseEnumifyError.MISSING_OR_INVALID].stringify(message),
        }),
    },
    [BaseErrorConsts.BaseEnumifyError.UNKNOWN]: {
        type: 'UNKNOWN',
        code: Number(BaseErrorConsts.BaseEnumifyError.UNKNOWN),
        stringify: (message?: string) => 'Unknown error' || message,
        format: (message?: string) => ({
            code: BaseErrors[BaseErrorConsts.BaseEnumifyError.UNKNOWN].code,
            message: BaseErrors[BaseErrorConsts.BaseEnumifyError.UNKNOWN].stringify(message),
        }),
    },
}
