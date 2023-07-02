import {beforeEach, describe, expect, test} from "@jest/globals";
import {StorageService} from "./storage.service";

describe('storage service test',() => {
    const localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn()
    };
    const storage = new StorageService(localStorageMock)
    beforeEach(() => {
        localStorageMock.clear()
    })

    test('get dark theme on case when theme not saved', () => {
        const theme = storage.getTheme();
        expect(theme).toBe('dark')
    })

    test('save theme and get it', () => {
        const savedTheme = 'light';
        localStorageMock.getItem.mockReturnValue(savedTheme);

        const theme = storage.getTheme();
        expect(localStorageMock.getItem).toHaveBeenCalledWith('PickojiTheme');
        expect(theme).toBe(savedTheme);
    });
    test('saveTheme should save the current theme in LocalStorage', () => {
        const theme = 'light';
        storage.saveTheme(theme);
        expect(localStorageMock.setItem).toHaveBeenCalledWith('PickojiTheme', theme);
    });

})