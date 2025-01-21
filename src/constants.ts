import { join } from "path";

export const LOCAL_PATH = join(process.cwd(), "local");
export const RESOURCE_PATH = join(process.cwd(), 'client')
export const HOME_PATH = join(process.cwd(), 'client', 'index.html');
export const SALT_ROUNDS = 10;
