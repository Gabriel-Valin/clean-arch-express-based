export interface ServiceProtocol<Input, Output> {
    perform(params?: Input): Output
}