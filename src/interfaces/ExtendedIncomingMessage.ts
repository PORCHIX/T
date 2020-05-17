import { IncomingMessage } from "telegraf/typings/telegram-types";

export interface ExtendedIncomingMessage extends IncomingMessage {
    cmdArgs: Array<string> | null
}