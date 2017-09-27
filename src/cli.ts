import { Help } from './commands'

export interface ICommand {
    name: string
    help():Promise<any>
    run(args?:string[]):Promise<any>
}

export default class MateriaCli {
    commands: ICommand[]

    constructor() {
        this.commands.push(new Help())
    }

    getCommand(name:string): ICommand {
        return this.commands.find(command => command.name == name)
    }

    run(args:string[]):Promise<any> {
        let commandName = args.shift()
        let command = this.getCommand(commandName)
        if (command) {
            return command.run(args)
        }
        else {
            return Promise.reject(`The command [${args[0]}] does not exist.`)
        }
    }
}