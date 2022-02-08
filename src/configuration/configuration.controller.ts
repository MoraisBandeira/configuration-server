import { Controller, Query , Get } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { ConfigurationInterface } from './interface/configuration.interface';

@Controller('configuration')
export class ConfigurationController {
    constructor(private readonly configurationServer: ConfigurationService){}

    @Get()
    async getConfiguration(@Query('enviroment') enviroment: string ): Promise<any>{
            return await this.configurationServer.getConfiguration(enviroment);
    }
}
