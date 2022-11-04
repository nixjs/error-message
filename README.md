# @nixjs23n6/error-message

A simple component to control the error message.

## Quick Setup

### Install

Install these dependencies:

`yarn add @nixjs23n6/error-message`

### Setup & Usage

```typescript
import { BaseErrorConsts, BaseErrorTypes } from '@nixjs23n6/error-message'

export const AuthCode = 20

const enumify = BaseErrorConsts.enumifyError(['WRONG_OTP', 'TOKEN_INVALID_OR_NOT_FOUND'], 0, AuthCode)

export const ourErrors = BaseErrorConsts.enumify({ ...enumify })

export type ErrorType = keyof typeof ourErrors

export const AuthErrors: Record<string, BaseErrorTypes.Error<ErrorType>> = {
    [ourErrors.WRONG_OTP]: {
        type: 'WRONG_OTP',
        code: Number(ourErrors.WRONG_OTP),
        stringify: (otp: string) => `Wrong OTP ${otp}`,
        format: (otp: string) => ({
            code: AuthErrors[ourErrors.WRONG_OTP as ErrorType].code,
            message: AuthErrors[ourErrors.WRONG_OTP as ErrorType].stringify(otp),
        }),
    },
    [ourErrors.TOKEN_INVALID_OR_NOT_FOUND]: {
        type: 'TOKEN_INVALID_OR_NOT_FOUND',
        code: Number(ourErrors.TOKEN_INVALID_OR_NOT_FOUND),
        stringify: (params: { accessToken: string; refreshToken: string }) =>
            `Token invalid or not found ${JSON.stringify(params.accessToken)}`,
        format: (params: { accessToken: string; refreshToken: string }) => ({
            code: AuthErrors[ourErrors.TOKEN_INVALID_OR_NOT_FOUND as ErrorType].code,
            message: AuthErrors[ourErrors.TOKEN_INVALID_OR_NOT_FOUND as ErrorType].stringify(params),
        }),
    },
}

console.log(AuthErrors[ourErrors.WRONG_OTP].format())
console.log(AuthErrors[ourErrors.TOKEN_INVALID_OR_NOT_FOUND].format())
```
