export namespace BaseErrorConsts {
    export const BaseCode = 900000

    export const enumify = <T extends Record<string, U>, U extends string>(x: T): T => x
    export const mergeCode = (num: number, base = BaseCode) => String(base + Number(num))
    export const enumifyError = (enums: string[], start?: number, codeConvention?: number) => {
        let errors: Record<string, string> = {}
        for (let i = 0; i < enums.length; i++) {
            const element = enums[i]
            errors = Object.assign(errors, { [element]: mergeCode((start || 0) + i, codeConvention || 0) })
        }
        return errors
    }

    export const BaseEnumifyError = enumifyError(['DATA_NOT_FOUND', 'MISSING_OR_INVALID', 'UNKNOWN'], 0, BaseErrorConsts.BaseCode)
}
