import { BaseObject } from "../object/BaseObject";
export class ObjectManager {
    static instance_;
    constructor() { }
    objectList = [];
    static get GetInstance() {
        if (!this.instance_) {
            this.instance_ = new ObjectManager();
        }
        return this.instance_;
    }
    UpdateManager() {
        for (const obj of this.objectList) {
            if (obj == null)
                continue;
            if (obj.IsAlive()) {
                obj.update();
                obj.draw();
            }
            else {
                this.RemoveObject(obj);
            }
        }
    }
    AddObject(obj) {
        this.objectList.push(obj);
    }
    RemoveObject(obj) {
        if (!obj.IsAlive()) {
            const index = this.objectList.indexOf(obj);
            if (index == -1)
                return;
            this.objectList.splice(index, 1);
        }
    }
    get GetObjectList() {
        return this.objectList;
    }
}
