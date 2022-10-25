import { dogcarePasswordReq } from "./dogcare";

describe("Testing the successfulness of the dogcare function's implementation", () => {
    test("Checking if a password is not 16 characters in length: ", () => {
        expect(dogcarePasswordReq("DogPass1!")).toBe(false);
    });
    test("Checking if a password begins with a number: ", () => {
        expect(dogcarePasswordReq("420CosUmainePass!")).toBe(false);
    });
    test("Checking if a password begins with a special characters: ", () => {
        expect(dogcarePasswordReq("???dogcareLogin1")).toBe(false);
    });
    test("Checking if a password does not contain any numbers at all: ", () => {
        expect(dogcarePasswordReq("DogcareLoginPass!")).toBe(false);
    });
    test("Checking if a password does not contain any letters: ", () => {
        expect(dogcarePasswordReq("123456789!876543")).toBe(false);
    });
    test("Checking if a password does not contain any special characters: ", () => {
        expect(dogcarePasswordReq("DogcareLoginPss1")).toBe(false);
    });
    test("Checking if a password satisfies all of the requirements: ", () => {
        expect(dogcarePasswordReq("Hello9000?World!")).toBe(true);
        expect(dogcarePasswordReq("Cos420UmainePas!")).toBe(true);
    });
});
