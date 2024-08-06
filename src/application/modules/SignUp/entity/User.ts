import { randomUUID } from "node:crypto";

export interface IUserProps {
  name: string;
  password: string;
}

export class User {
  private _id: string;
  private _createdAt: Date;
  private _updatedAt: Date;
  private props: IUserProps;

  constructor(props: IUserProps) {
    this._id = randomUUID();
    this._createdAt = new Date();
    this._updatedAt = new Date();
    this.props = props;
  }

  public get id() {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }
}
