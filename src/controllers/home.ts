import { Controller, Get, HttpResult } from "@danielgl/steampunk";
import { HomeService } from "../services/home";

@Controller()
export class HomeController {

    public constructor(private readonly service: HomeService) { }

    @Get()
    public async getHello() {
        const message = await this.service.getHello();

        return HttpResult.ok({
            message
        });
    }
}
