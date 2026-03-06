import { describe, expect, test } from "bun:test";
import { HomeService } from "../src/services/home";

describe("HomeService", () => {
    test("getHello should return 'Hello'", async () => {
        const service = new HomeService();
        const result = await service.getHello();
        expect(result).toBe("Hello");
    });
});
