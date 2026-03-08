import { ApiController, Controller, Get, HttpResult } from "@danielgl/steampunk";
import { HomeService } from "../services/HomeService";

@ApiController()
export class HomeController extends Controller {

    public constructor(private readonly service: HomeService) {
        super();
    }

    @Get()
    public async getHello() {
        const message = await this.service.getHello();

        return HttpResult.ok({
            message
        });
    }
}
