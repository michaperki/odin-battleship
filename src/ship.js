function Ship(length) {
  const getLength = () => length;
  const hit = () => {
    length--;

    if (length < 0) {
      throw new Error("Ship is sunk");
    }

    return length;

  };

  return { getLength, hit };

}

module.exports = Ship;