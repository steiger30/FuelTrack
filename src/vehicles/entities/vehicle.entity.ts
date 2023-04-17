export class Vehicle {
  private _plate: string;
  private _model: string;

  constructor(plate: string, model: string) {
    this._model = model;
    this._plate = plate;
  }
  get plate(): string {
    return this.plate;
  }
  get model(): string {
    return this.model;
  }
  set model(model: string) {
    this._model = model;
  }
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  set plate(plate: string) {
    this._model = plate;
  }
}
