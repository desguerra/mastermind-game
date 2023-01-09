import { React } from 'react';

function Game() {

  const handleChange = e => {
    const numFields = 4;
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    // parseInt parses a string argument and returns the integer
    let fieldIntIndex = parseInt(fieldIndex, 10);

    // if value length is greater than max char length
    if (value.length >= maxLength) {
      // if not last input field
      if (fieldIntIndex < numFields) {
        const nextField = document.querySelector(
          `input[name=guess-${fieldIntIndex + 1}]`
        );

        // if next field exists, focus next field
        if (nextField !== null) {
          nextField.focus();
        }
      }
    }
    
  }

  return (
    <div>
      <div>
        Guess the number combination!
      </div>
      
      <form>
        <input type='text' id='first' name='guess-1' maxLength={1} minLength={0} size='1' onChange={handleChange} autoFocus />
        <input type='text' id='second' name='guess-2' maxLength={1} minLength={0} size='1' onChange={handleChange} />
        <input type='text' id='third' name='guess-3' maxLength={1} minLength={0} size='1' onChange={handleChange} />
        <input type='text' id='fourth' name='guess-4' maxLength={1} minLength={0} size='1' onChange={handleChange} />

        <button type='submit'>guess!</button>
      </form>
    </div>
  );
}

export default Game;