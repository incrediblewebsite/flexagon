namespace Flexagonator {

  // add new flexes to old, consolidating redundant rotates
  // and return the new list (which could be shorter)
  export function addAndConsolidate(oldFlexes: string[], newFlexes: string[]): string[] {
    var allflexes = [];
    // copy old list across
    for (var flex of oldFlexes) {
      allflexes.push(flex);
    }

    // add new flexes, consolidating redundant rotates
    var start = true;
    for (var flex of newFlexes) {
      if (start) {
        const last = allflexes.length > 0 ? allflexes[allflexes.length - 1] : "";
        if ((flex === '<' && last === '>') || (flex === '>' && last === '<') || (flex === '^' && last === '^')) {
          allflexes.pop();
          continue;
        }
        start = false;
      }

      allflexes.push(flex);
    }

    return allflexes;
  }

}
