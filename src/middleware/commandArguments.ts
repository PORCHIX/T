import { Context } from "telegraf";
import { ExtendedContext } from "../interfaces/ExtendedContext";

export default async function (ctx: ExtendedContext, next: any) {
    const args: Array<string> = ctx.message.text.split(' ')

    ctx.message.cmdArgs = args

    next()
}