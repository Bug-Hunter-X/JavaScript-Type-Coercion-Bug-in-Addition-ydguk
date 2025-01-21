function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    return null; // Handle null or non-number inputs
  }
  return a + b;
}