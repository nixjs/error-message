export namespace BaseErrorTypes {
    export type ErrorResponse = {
        code: number
        message: string
        optional?: any
    }

    export type ErrorStringifier<S = any> = (params?: S) => string

    export type ErrorFormatter<F = any> = (params?: F) => ErrorResponse

    export type Error<T, S = any, F = any> = {
        type: T
        code: number
        stringify: ErrorStringifier<S>
        format: ErrorFormatter<F>
    }
}
