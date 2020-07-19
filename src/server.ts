import * as dotenv from 'dotenv'
import {Telegraf, Context} from 'telegraf'

dotenv.config()

import downloadCommand from './commands/download'
import cmdArgsMiddleware from './middleware/commandArguments'

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.command('download', cmdArgsMiddleware, downloadCommand)
bot.command('ping', ctx => {ctx.reply('Pong')});

bot.launch()
