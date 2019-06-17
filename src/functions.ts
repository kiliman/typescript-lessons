export function greet(greeting: string, name: string): string {
  return `${greeting}, ${name}!`
}

export function fill<T>(array: any[], value: T): T[] {
  return array.map(() => value)
}
