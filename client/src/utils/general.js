/**
 * Indicates whether the string is null or an empty string.
 * @param {string} value string to test
 * @returns {boolean} true if the value parameter is null or an empty string; otherwise, false.
 */
export function isNullOrEmpty(value) {
  return value === '' || value === null;
}

/**
 * Formats a given string to include ellipsis if its length exceeds 80 characters.
 * @param {string} value string to format
 * @returns {string} formatted string with ellipsis at the end, or the original string if its length is 80 characters or less.
 */
export function longStringFormat(value) {
  return value.length > 80 ? `${value.substring(0, 80)}...` : value;
}

/**
 * Capitalizes the first letter of a given string.
 * @param {string} value string to capitalize
 * @returns capitalized string.
 */
export function capitalizeFirstLetter(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
