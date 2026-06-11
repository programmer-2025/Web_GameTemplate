import { BaseObject } from "../object/BaseObject";

export class ObjectManager {

    private static instance_: ObjectManager;
    private constructor() {}

    private objectList: Array<BaseObject> = [];

    public static get GetInstance(): ObjectManager {
        if (!this.instance_) {
            this.instance_ = new ObjectManager();
        }
        return this.instance_;
    }

    public UpdateManager() {
        for (const obj of this.objectList) {
            if (obj == null) continue;
            if (obj.IsAlive()) {
                obj.update();
                obj.draw();
            }
            else {
                this.RemoveObject(obj);
            }
        }
    }

    public AddObject(obj: BaseObject) {
        this.objectList.push(obj);
    }

    public RemoveObject(obj: BaseObject) {
        if (!obj.IsAlive()) {
            const index = this.objectList.indexOf(obj);
            if (index == -1) return;
            this.objectList.splice(index, 1);
        }
    }

    public get GetObjectList(): Array<BaseObject> {
        return this.objectList;
    }
}