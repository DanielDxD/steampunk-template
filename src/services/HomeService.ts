import { Injectable } from "@danielgl/steampunk";

@Injectable()
export class HomeService {
    public async getHello() {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve("Hello");
            }, 500);
        });
    }
}
