/**
 * Enumeration of flammable substances.
 */
export enum FlammableSubstance {
  Gasoline,
  Polystyrene,
  Soap,
}

/**
 * Molotov is a breakable glass bottle containing a flammable substance.
 */
export class Molotov {
  /**
   * Bottle volume.
   * @private
   */
  private _bottleVolume = 0;

  /**
   * Sets bottle volume.
   * @param value
   */
  set bottleVolume(value: number) {
    this._bottleVolume = value;
  }

  /**
   * Returns bottle volume.
   */
  get bottleVolume(): number {
    return this._bottleVolume;
  }

  /**
   * List of flammable substances in the bottle.
   * @private
   */
  private _flammableSubstances: Array<FlammableSubstance> = [];

  /**
   * Returns a list of flammable substances in the bottle.
   */
  get flammableSubstances() {
    return this._flammableSubstances;
  }

  /**
   * Adds flammable substance to the bottle.
   * @param substance
   */
  public addFlammableSubstance(substance: FlammableSubstance) {
    this._flammableSubstances.push(substance);
  }

  /**
   * Denotes if bottle has a rag to set Molotov on fire.
   * @private
   */
  private _hasRag = false;

  /**
   * Sets/removes a rag.
   * @param hasRag
   */
  set hasRag(hasRag: boolean) {
    this._hasRag = hasRag;
  }

  /**
   * Returns true if bottle has a rag and false otherwise.
   */
  get hasRag(): boolean {
    return this._hasRag;
  }
}

/**
 * MolotovBuilder is the interface for builder implementations.
 *
 * Builder lets you construct complex objects step by step.
 */
interface MolotovBuilder {
  /**
   * Resets the builder.
   */
  reset(): void;

  /**
   * Adds a bottle.
   * @param bottleVolume
   */
  addBottle(bottleVolume: number): void;

  /**
   * Adds a flammable substance to the bottle.
   * @param substance
   */
  addFlammableSubstance(substance: FlammableSubstance): void;

  /**
   * Adds a rag to the bottle.
   */
  addRag(): void;

  /**
   * Returns created Molotov.
   */
  getMolotov(): Molotov;
}

/**
 * MolotovCocktailBuilder is the Molotov builder implementation
 * that creates Molotov cocktails.
 */
export class MolotovCocktailBuilder implements MolotovBuilder {
  /**
   * Molotov that is being created.
   * @private
   */
  private _molotov: Molotov = new Molotov();

  /**
   * Resets the builder.
   */
  public reset(): void {
    this._molotov = new Molotov();
  }

  /**
   * Adds a bottle.
   * @param bottleVolume
   */
  public addBottle(bottleVolume: number): void {
    this._molotov.bottleVolume = bottleVolume;
  }

  /**
   * Adds a flammable substance to the bottle.
   * @param substance
   */
  public addFlammableSubstance(substance: FlammableSubstance): void {
    this._molotov.addFlammableSubstance(substance);
  }

  /**
   * Adds a rag to the bottle.
   */
  public addRag(): void {
    this._molotov.hasRag = true;
  }

  /**
   * Returns created Molotov.
   */
  public getMolotov(): Molotov {
    return this._molotov;
  }
}

// Here we can create another Molotov builder implementation that
// builds Molotovs differently but using the same steps defined
// in the interface.

/**
 * MolotovDirector is responsible for creating Molotovs with
 * different configuration.
 *
 * Director is optional since the client can control builders directly.
 */
export class MolotovDirector {
  /**
   * Builder that is used to create Molotovs.
   * @private
   */
  private _builder: MolotovBuilder;

  constructor(builder: MolotovBuilder) {
    this._builder = builder;
  }

  /**
   * Sets a builder to use to create Molotovs.
   * @param value
   */
  set builder(value: MolotovBuilder) {
    this._builder = value;
  }

  /**
   * Returns the builder that is used to create Molotovs.
   */
  get builder(): MolotovBuilder {
    return this._builder;
  }

  /**
   * Makes a generic Molotov.
   */
  public makeDefaultMolotov(): Molotov {
    this._builder.reset();

    this._builder.addBottle(0.5);
    this._builder.addFlammableSubstance(FlammableSubstance.Gasoline);
    this._builder.addRag();

    return this._builder.getMolotov();
  }

  /**
   * Makes a big ass Molotov.
   *
   * Inspired by Russian invasion of Ukraine on January 24, 2022.
   */
  public makeBigAssMolotovToKillRussianFascists(): Molotov {
    this._builder.reset();

    this._builder.addBottle(1);
    this._builder.addFlammableSubstance(FlammableSubstance.Gasoline);
    this._builder.addFlammableSubstance(FlammableSubstance.Polystyrene);
    this._builder.addFlammableSubstance(FlammableSubstance.Soap);
    this._builder.addRag();

    return this._builder.getMolotov();
  }
}
