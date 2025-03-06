import '@testing-library/jest-dom';
import "jest-fetch-mock";

jest.mock("node-fetch", () => require("jest-fetch-mock"));
fetchMock.enableMocks();