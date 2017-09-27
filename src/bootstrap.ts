import Cli from './cli'

import * as yargs from 'yargs'

export default function() {
    let argv = yargs
        .command({
            command: 'init <path>',
            desc: 'Initialize a new Materia application',
            aliases: ['init'],
            handler: argv => {
                
            }
        })
        .command({
            command: 'start'
        })
        .command({
            command: 'addons'
        })
        .option()
        .help()
        .argv

    console.log(argv)
}

/**
 * materia start [--prod] [-p|--port <number>] [--mode=prod(deprecated)]
 * materia init <path> [--package <value>] [--name <value>] [--addon|-a]
 * materia addons add <addon>
 * materia addons remove <addon>
 * materia addons list
 * [test]
 * materia test sql <sql-query> [--expected|-e <expected_response>] [--fullfiled|--rejected] [--length <value>] []
 * materia test query <entity> <query> <params> [--expected|-e <expected_response>] [--fullfiled|--rejected] [--length <value>] []
 * materia test api <endpoint> <params> [--expected|-e <expected_response>] [--fullfiled|--rejected] [--length <value>] [--status <value>]
 * materia test <path>
 *      e.g. materia test ./tests/main-test.js
 *      e.g. materia test ./tests/**\/*.js
 * [tests suite]
 * materia tests list
 * materia tests add <test> [--expected|-e <expected_response>] [--fullfiled|--rejected] [--length <value>] []
 *      e.g. materia tests add api /projects
 * materia deploy gcloud
 * materia config server [--dev|--prod|--live] --host|-h <value> --port|-p <value>
 * materia config database postgres [--dev|--prod|--live] --type|-t <value=postgres|mysql|sqlite> --host|-h <value> --port|-p <value> --username|-u <value> --password|-p <value> --database|-d <value>
 * materia config database mysql [--dev|--prod|--live] --type|-t <value=postgres|mysql|sqlite> --host|-h <value> --port|-p <value> --username|-u <value> --password|-p <value> --database|-d <value>
 * materia config database sqlite [--dev] [--file <path>]
 * materia config deploy docker 
 * materia config deploy gcloud
 * materia help
 * 
 * [Later]
 * materia service add|remove <service>
 *      e.g. materia service add redis
 * 
 */