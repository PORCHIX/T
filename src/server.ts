import * as dotenv from 'dotenv'
import {Telegraf} from 'telegraf';

dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.launch()
.then(() => {
    console.log('Bot is running');
});