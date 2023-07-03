import getStorage from "../../services/getStorage";
import 'mock-local-storage';
import {StorageService} from "@/services/storage.service";

describe('storage service test', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('getStorage should return an instance of StorageService', () => {
        const storage = getStorage() as any
        expect(storage instanceof StorageService).toBe(true);
    });

    test('getTheme should save and  retrieve the theme from localStorage', () => {
        const savedTheme = 'light';
        localStorage.setItem('PickojiTheme', savedTheme);

        const storage = getStorage();
        const theme = storage.getTheme();
        expect(theme).toBe(savedTheme);
    });

    test('saveTheme should store the theme in localStorage', () => {
        const theme = 'dark';
        const storage = getStorage();
        storage.saveTheme(theme);

        expect(localStorage.getItem('PickojiTheme')).toBe(theme);
    });
});
