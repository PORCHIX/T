import {Context} from 'telegraf'
import Axios from 'axios'
import validator from 'validator'
import { ExtendedContext } from '../interfaces/ExtendedContext'
import {promisify} from 'util'
import {Stream} from 'stream'
import * as fs from 'fs'
const cheerio = require('cheerio')

export default async function (ctx: ExtendedContext) {
    if (validator.isURL(ctx.message.cmdArgs[1])) {
        Axios.get(ctx.message.cmdArgs[1],
            {
                headers: {
                    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) snap Chromium/81.0.4044.138 Chrome/81.0.4044.138 Safari/537.36'
                }
            })
        .then((res) => {
            let $ = cheerio.load(res.data);
            console.log(res.data);

            ctx.reply('Success');
        })
        // const redirectUrl: string = res.redirectUrls[0]
        // let resRedirect: Response = await got.get(redirectUrl, {
        //     headers: {
        //         'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) snap Chromium/81.0.4044.138 Chrome/81.0.4044.138 Safari/537.36'
        //     }
        // })
        // let $ = cheerio.load(resRedirect.body)

        // const pipeline = promisify(Stream.pipeline);

        // await pipeline(
        //     got.stream($('video')[0]['attribs']['src']),
        //     fs.createWriteStream(`${ctx.from.id}.mp4`)
        // )

        // ctx.replyWithVideo({source: `${ctx.from.id}.mp4`})

        // fs.unlinkSync(`${ctx.from.id}.mp4`)

    } else {
        ctx.reply(`${ctx.message.cmdArgs[1]} is not a valid URL.`)
    }
}