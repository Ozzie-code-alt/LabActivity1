import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  Dropdown,
  InputGroup,
  OverlayTrigger,
  Stack,
  Tooltip,
} from "react-bootstrap";
import { ChangeEvent, useState } from "react";
import List from "./List";
import PythonList from "./PythonList";
import Javalist from "./Javalist";
import Alert from 'react-bootstrap/Alert';



function Formm() {
  interface myObject {
    [key: string]: string;
  }

  const [message, setMessage] = useState("");
  const [splittedHEHE, setSplitted] = useState<string[]>([]);

  const [dropdownString, setDropdown] = useState("");
  const [show, setShowError] = useState(true);

  const pythonTokensContainer: myObject = {
    'sum': "Identifier",
    "x" : "identifier",
    "y" : "Identifier",
    "print": "Identifier",
    "input": "Identifier",
    "type": "Keyword",
    'let': "KeyWord",
    "int": "KeyWord",
    "=": "operator",
    "(": "Delimiter",
    ")": "Deliimiter",
    '{': "Deliimiter",
    '}': "Deliimiter",
    '"' : 'Delimiter',
    '+': 'Operator',
    '-': 'Operator',
    '*':'Operator',
    '/':'Operator',
  };

const javaTokensContainer: myObject= {
"out" : 'Keyword',
"println" : 'Keyword',
"main": 'Identifier',
"args":"Identifier",
"String" : "Identifier",
'class':'Keywords',
'public':'Keywords',
'static':'Keywords',
'if':'Keywords',
'void' : 'Keywords',
'while':'Keywords',
'return' :'Keywords',
'(':  'Separators',
')':  'Separators',
'{': 'Separators',
'}': 'Separators',
';': 'Separators',
',':'Separators',
'"' : 'Separators',
"." : 'Separators',
"=" : "Operator",
"[" : "Separator",
"]" : "Separator",
'+': 'Operator',
'-': 'Operator',
'*':'Operator',
'/':'Operator',
}



  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    console.log(dropdownString);
    const printAnswer = labFunction(message);
    setSplitted(printAnswer);
  };



  const labFunction = (word: string) => {
    let modifiedString = "";
    let valueAdded = "";

    for (let i = 0; i < word.length; i++) {
    
      if (word[i] === "(" || word[i] === ")" || word[i]  === "." || word[i] === "," || word[i]=== ";"|| word[i]==="[" || word[i] ==="]") {
        modifiedString += " " + word[i] + " ";
      } else {
        modifiedString += word[i]  ;
      }
      // console.log(indexPerenthesis)
    }

    // console.log(modifiedString)
    let splitted = modifiedString.split(" ").filter(filtering => filtering !=='');
    console.log(splitted);

    if (dropdownString === "Python") {
      splitted.forEach((value) => {
        if (pythonTokensContainer.hasOwnProperty(value)) {
          valueAdded += " " + value + ":" + pythonTokensContainer[value] + " ";
        } else if (value === "(" || value === ")" || value == "=") {
          valueAdded += " " + value + " ";
        } else {
          valueAdded += value + "Literal ";
        }
      });
      console.log(valueAdded);

      let heheWorks = valueAdded.split(" ");

      console.log(heheWorks);
      // console.log(splitted)
      return heheWorks;
      // let wordSeparated = word.split(" ")
      // let indexParenthesis = wordSeparated.indexOf("(")

      // console.log(wordSeparated[indexParenthesis])
      // console.log(wordSeparated)
    } else if (dropdownString === "Java") {
          const numberStrings = []

      splitted.forEach((value) => {
        const potentialNumber = parseInt(value, 10)
        if(!isNaN(potentialNumber)){
          numberStrings.push(value)
        }
          
        if (javaTokensContainer.hasOwnProperty(value)) {
            valueAdded += " " + value + ":" + javaTokensContainer[value] + " ";
          
        } else if (value === "(" || value === ")" || value == "=") {
            valueAdded += " " + value + " ";  
        }
      else {
          valueAdded += value + ":Literal ";
        }
      });
      // console.log(valueAdded);

      let heheWorks = valueAdded.split(" ")
     

      console.log(heheWorks);
      // console.log(splitted)
      return heheWorks;
      // let wordSeparated = word.split(" ")
      // let indexParenthesis = wordSeparated.indexOf("(")

      // console.log(wordSeparated[indexParenthesis])
      // console.log(wordSeparated)

    }
    else{
      console.log("Workjss ?")
       setShowError(true)
    }
  };

  const UpdateButton = (btnName: string) => {
    setDropdown(btnName);
  };

  const renderToolTip = (HEHEHE: string) => {
    return <Tooltip id="tooltip">{HEHEHE}</Tooltip>;
  };

  
   
  

  const PythonTokenss = [
    "KeyWords",
    "identifier",
    "Literals",
    "Delimiters",
    " Operators",
  ];
  const JavaTokenss = [
    "KeyWords",
    "identifier",
    "Literals",
    " Operators",
    "Separator",
    "Comments",
  ];
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="form1">
          <Stack gap={3}>
            <Form.Label>Input Text Here</Form.Label>
            <Form.Label>
              {" "}
              {dropdownString == "Python" ? (
                <PythonList pythonValue={PythonTokenss} />
              ) : dropdownString == "Java" ? (
                <Javalist javaValue={JavaTokenss} />
              ) : null}
            </Form.Label>
          </Stack>


          <Alert show={show} variant="success">
        <Alert.Heading>Mandatory Read me which will avoid errors because im too lazy to polish/finish this</Alert.Heading>
        <p>
    Please dont forget to choose a Language otherwise it will return an error... thats it

        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShowError(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>


          <InputGroup>
            <Dropdown>
              <Dropdown.Toggle variant="success">
                {dropdownString ? dropdownString : "Choose a Language"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <OverlayTrigger
                  placement="right"
                  overlay={renderToolTip(
                    "Python Tokens: \n Keywords \n identifier \n Literals \n Delimiters \n Operators"
                  )}
                >
                  <Dropdown.Item onClick={() => UpdateButton("Python")}>
                    Python
                  </Dropdown.Item>
                </OverlayTrigger>

                <OverlayTrigger
                  placement="right"
                  overlay={renderToolTip(
                    "Java Tokens:  \n Keywords \n identifier \n Literals \n Operators \n Separators \n Comments"
                  )}
                >
                  <Dropdown.Item onClick={() => UpdateButton("Java")}>
                    Java
                  </Dropdown.Item>
                </OverlayTrigger>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              type="text"
              value={message}
              onChange={handleChange}
              placeholder="Place assignment query here"
            />
            <Button variant="outline-secondary" onClick={handleClick}>
              Check it Out
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>
      <List splittedData={splittedHEHE} />
    </div>
  );
}

export default Formm;
