declare module 'catchify' {
  function catchify<E extends Error, T>(a: Promise<T>): Promise<[E, T]>;
  export default catchify;
}
