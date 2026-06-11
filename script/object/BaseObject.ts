export abstract class BaseObject {

    name_: string 
    isAlive_: boolean

    public constructor(name: string, isAlive: boolean) {
        this.name_ = name;
        this.isAlive_ = isAlive;
    }

    abstract init(): void;
    abstract update(): void;
    abstract draw(): void;
    abstract release(): void;

    public getName(): string {
        return this.name_;
    }

    public IsAlive(): boolean {
        return this.isAlive_;
    }
}