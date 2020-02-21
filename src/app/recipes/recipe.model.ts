export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, dec: string, imagePath: string) {
    this.name = name;
    this.description = dec;
    this.imagePath = imagePath;
  }
}
