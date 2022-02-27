import {
  FlammableSubstance,
  Molotov,
  MolotovCocktailBuilder,
  MolotovDirector,
} from './builder';

describe('Molotov', () => {
  const molotov = new Molotov();

  it('creates a new Molotov instance', () => {
    expect(molotov.bottleVolume).toBe(0);
    expect(molotov.flammableSubstances).toEqual([]);
    expect(molotov.hasRag).toBe(false);
  });

  it('sets a bottle volume', () => {
    molotov.bottleVolume = 0.5;

    expect(molotov.bottleVolume).toBe(0.5);
  });

  it('adds a burning substance', () => {
    molotov.addFlammableSubstance(FlammableSubstance.Gasoline);

    expect(molotov.flammableSubstances).toEqual([FlammableSubstance.Gasoline]);
  });

  it('sets a rag', () => {
    molotov.hasRag = true;

    expect(molotov.hasRag).toBe(true);
  });
});

describe('MolotovCocktailBuilder', () => {
  const molotovBuilder = new MolotovCocktailBuilder();

  it('creates a new MolotovCocktailBuilder instance', () => {
    expect(molotovBuilder).not.toBe(undefined);
  });

  it('builds a molotov', () => {
    molotovBuilder.addBottle(0.5);
    molotovBuilder.addFlammableSubstance(FlammableSubstance.Gasoline);
    molotovBuilder.addRag();
    const molotov = molotovBuilder.getMolotov();

    expect(molotov.bottleVolume).toBe(0.5);
    expect(molotov.flammableSubstances).toEqual([FlammableSubstance.Gasoline]);
    expect(molotov.hasRag).toBe(true);
  });

  it('resets a builder', () => {
    molotovBuilder.reset();

    expect(molotovBuilder.getMolotov()).toEqual(new Molotov());
  });
});

describe('MolotovDirector', () => {
  const molotovDirector = new MolotovDirector(new MolotovCocktailBuilder());

  it('creates a new MolotovDirector instance', () => {
    expect(molotovDirector).not.toBe(undefined);
  });

  it('sets another builder', () => {
    const molotovBuilder = new MolotovCocktailBuilder();

    molotovDirector.builder = molotovBuilder;

    expect(molotovDirector.builder).toEqual(molotovBuilder);
  });

  it('makes default molotov', () => {
    const molotov = molotovDirector.makeDefaultMolotov();

    expect(molotov.bottleVolume).toBe(0.5);
    expect(molotov.flammableSubstances).toEqual([FlammableSubstance.Gasoline]);
    expect(molotov.hasRag).toBe(true);
  });

  it('makes big ass molotov to kill Russian fascists', () => {
    const molotov = molotovDirector.makeBigAssMolotovToKillRussianFascists();

    expect(molotov.bottleVolume).toBe(1);
    expect(molotov.flammableSubstances).toEqual([
      FlammableSubstance.Gasoline,
      FlammableSubstance.Polystyrene,
      FlammableSubstance.Soap,
    ]);
    expect(molotov.hasRag).toBe(true);
  });
});
