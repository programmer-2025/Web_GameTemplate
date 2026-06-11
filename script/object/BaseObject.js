export class BaseObject {
    name_;
    isAlive_;
    constructor(name, isAlive) {
        this.name_ = name;
        this.isAlive_ = isAlive;
    }
    getName() {
        return this.name_;
    }
    IsAlive() {
        return this.isAlive_;
    }
}
