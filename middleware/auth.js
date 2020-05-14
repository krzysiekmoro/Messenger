function comparePassword(candidatePassword, password) {
  return candidatePassword === password ? true : false;
}

module.exports = comparePassword;
