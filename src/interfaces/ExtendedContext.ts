import { Context } from "telegraf";
import { ExtendedIncomingMessage } from "./ExtendedIncomingMessage";

export interface ExtendedContext extends Context {
    message: ExtendedIncomingMessage
}