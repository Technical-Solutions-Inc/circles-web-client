import cx from 'classnames';

/**
 * Interpolates base & mod into a BEM string
 * @param {string} base
 * @param {string} mod
 * @returns {string}
 */
function getCxMod(base, mod) {
  return `${base}--${mod}`
}

//
/**
 * Accepts single or plural mods. If single, returns the mod appended
 * to the base. If plural, returns an array of each mod appended to
 * the base.
 * @param {string} base
 * @param {(string|object)} mod
 * @returns {(string|array|null)}
 */
function cxMods(base, mods) {
  if (mods && typeof mods === 'object') {
    return Object.entries(mods).map(m => m[1] ? getCxMod(base, m[0]) : null)
  } else if (typeof mods === 'string' && mods.length > 0) {
    return getCxMod(base, mods)
  } else {
    return null;
  }
}

/**
 * HOC that adds helpers `this.cx()` & `this.cxEl()` on Component to
 * assist with creating BEM classNames DRYly.
 * @param Component
 * @returns {Object} Component
 */
export default function classNameHelpers(block) {
  return function(Component) {
    Component.prototype.cx = function(mods, ...rest) {
      return cx(block, cxMods(block, mods), this.props.className, ...rest)
    };

    Component.prototype.cxEl = function(el, mods, ...rest) {
      if (typeof el !== 'string') {
        throw new Error('Called this.cxEl without an element string!')
      }
      const cxEl = `${block}__${el}`;

      return cx(cxEl, cxMods(cxEl, mods), ...rest)
    };

    return Component;
  }
};
