export const capitalizeUsername = (username) => {
  if (username) {
    const firstLetter = username.charAt(0);
    const capitalized = username.replace(
      firstLetter,
      firstLetter.toUpperCase()
    );
    return capitalized;
  }
};
