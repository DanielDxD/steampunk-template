import { describe, expect, mock, test } from "bun:test";
import { HomeController } from "../src/controllers/HomeController";

describe("HomeController", () => {
    test("getHello should return a successful result with message", async () => {
        // Mock HomeService
        const mockHomeService = {
            getHello: mock(() => Promise.resolve("Hello Mock"))
        } as any;

        const controller = new HomeController(mockHomeService);
        const result: any = await controller.getHello();

        expect(mockHomeService.getHello).toHaveBeenCalled();
        expect(result.status).toBe(200);

        const body = JSON.parse(result.body);
        expect(body).toEqual({ message: "Hello Mock" });
    });
});
