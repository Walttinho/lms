import { Course } from "./entities/course.entity";

export class viewModelCourse {
    static toHttp({ id, name, description, banner }: Course) {
        return {
            id,
            name,
            description,
            banner,
        };
    }
}