import {StorageService} from "./storage.service";

const getStorage = () => {
    return new StorageService(localStorage)
}
export default getStorage