const characterCodes = [
    {
      letter: "a",
      code: 97,
    },
    {
      letter: "b",
      code: 98,
    },
    {
      letter: "c",
      code: 99,
    },
    {
      letter: "d",
      code: 100,
    },
    {
      letter: "e",
      code: 101,
    },
    {
      letter: "f",
      code: 102,
    },
    {
      letter: "g",
      code: 103,
    },
    {
      letter: "h",
      code: 104,
    },
    {
      letter: "i",
      code: 105,
    },
    {
      letter: "j",
      code: 106,
    },
    {
      letter: "k",
      code: 107,
    },
    {
      letter: "l",
      code: 108,
    },
    {
      letter: "m",
      code: 109,
    },
    {
      letter: "n",
      code: 110,
    },
    {
      letter: "o",
      code: 111,
    },
    {
      letter: "p",
      code: 112,
    },
    {
      letter: "q",
      code: 113,
    },
    {
      letter: "r",
      code: 114,
    },
    {
      letter: "s",
      code: 115,
    },
    {
      letter: "t",
      code: 116,
    },
    {
      letter: "u",
      code: 117,
    },
    {
      letter: "v",
      code: 118,
    },
    {
      letter: "w",
      code: 119,
    },
    {
      letter: "x",
      code: 120,
    },
    {
      letter: "y",
      code: 121,
    },
    {
      letter: "z",
      code: 122,
    },
    {
      letter: " ",
      code: 32,
    },
    {
      letter: ",",
      code: 44,
    },
    {
      letter: ".",
      code: 46,
    },
    {
      letter: "-",
      code: 45,
    },
    {
      letter: "?",
      code: 63,
    },
    {
      letter: "!",
      code: 33,
    },
  ];
  
  characterCodes.forEach((characterCode) => {
    characterCode.name = "jose";
  });
  
  const getUserMessage = () => {
    const userMessage = prompt("What is your message?");
  
    if (!userMessage) {
      alert("Please enter a valid message");
      return getUserMessage();
    }
  
    return userMessage;
  };
  
  const encodeText = (text) => {
    const characters = text.split("");
  
    const textCodes = characters.map((character) => {
      const foundCharacterCode = characterCodes.find((characterCode) => {
        return character === characterCode.letter;
      });
  
      return foundCharacterCode.code;
    });
  
    return textCodes.join("-");
  };
  
  const startCodify = () => {
    alert("Hello, welcome to Codify");
  
    do {
      const userMessage = getUserMessage();
  
      alert(`Your secret message is: ${encodeText(userMessage)}`);
    } while (confirm("Do you want to perform another action?"));
  
    alert("Bye bye, come back soon!");
  };

