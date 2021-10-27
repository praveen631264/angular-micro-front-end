export class Item {
  public name: string;
  public description: string;
  public libName = '';

  constructor(name: string, description: string, libName: string) {
    this.name = name;
    this.description = description;
    this.libName = libName;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getLibName(): string {
    return this.libName;
  }

  public setLibName(libName: string): void {
    this.libName = libName;
  }
}
