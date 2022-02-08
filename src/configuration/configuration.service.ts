import { Injectable } from '@nestjs/common';
import { ConfigurationInterface } from './interface/configuration.interface';

@Injectable()
export class ConfigurationService {
    async getConfiguration(enviroment: string): Promise<any>{
        if(enviroment === 'production'){
            process.env.NODE_ENV = 'production';
        }else{
            process.env.NODE_ENV = 'development';
        }

        delete require.cache[require.resolve('config')];
        const config  = require('config');

        const data: ConfigurationInterface = {
            server: {
                port: config.get('server.port') 
            },
            db: {
                type: config.get('db.type'),
                port: config.get('db.port'),
                database: config.get('db.database'),
                host: config.get('db.host'),
                username: config.get('db.username'),
                password: config.get('db.password'),
                synchronize: config.get('db.synchronize')
            }
        };

        return data;
    }
}
