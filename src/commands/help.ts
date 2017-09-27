import { ICommand } from '../cli'

export class Help implements ICommand {
    name:string
    constructor() {
        this.name = 'help'
    }

    help():Promise<any> {
        return this.run()
    }

    run(args?:string[]):Promise<any> {
        return Promise.reject('not implemented')
    }
}