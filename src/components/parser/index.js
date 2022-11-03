import { useState } from "preact/hooks"
import style from "./style.css"

const Parser = () => {
  const [input, setInput] = useState("Paste the JSON you need to parse here.")
  const [output, setOutput] = useState("Your output will be displayed here.")
  const [checkerStatus, setCheckerStatus] = useState("default")
  const [checkerText, setCheckerText] = useState("JSON format will be checked")
  const [copied, setCopied] = useState("Copy to clipboard")

  const search = (obj) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key] && typeof obj[key] === "object" && "year" in obj[key]) {
        let day = null
        if (obj[key].dayOfMonth.toString().length === 1) {
          day = "0" + obj[key].dayOfMonth.toString()
        } else {
          day = obj[key].dayOfMonth
        }
        let month = null
        if (obj[key].monthValue.toString().length === 1) {
          month = "0" + obj[key].monthValue.toString()
        } else {
          month = obj[key].monthValue
        }
        let year = obj[key].year
        let date = `${day}-${month}-${year}`
        obj[key] = date
      } else if (obj[key] && typeof obj[key] === "object") {
        search(obj[key])
      }
    })
    return obj
  }

  const handleInputChange = (e) => {
    const { value } = e.target
    setInput(value)
    setCopied("Copy to clipboard")
    document.getElementById("copyButton").disabled = true;
    try {
      let result = search(JSON.parse(value))
      setOutput(JSON.stringify(result, null, "\t"))
      setCheckerStatus("correct")
      setCheckerText("JSON format is valid")
      document.getElementById("copyButton").disabled = false;
    } catch (error) {
      setCheckerStatus("incorrect")
      setCheckerText("JSON format is not valid")
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
    setCopied("JSON copied!")
  }

  const cleanInputText = () => {
    if(input === "Paste the JSON you need to parse here."){
      setInput("")
    }
  }

  let checkerClass = `formatChecker-${checkerStatus}`

  return (
    <parser class={style.parser}>
      <textarea type="text" value={input} onFocus={cleanInputText} onInput={handleInputChange} />
      <div className={checkerClass}>{checkerText}</div>
      <textarea type="text" value={output} readOnly/>
      <button id="copyButton" onClick={copyToClipboard} disabled>{copied}</button>
    </parser>
  )
}

export default Parser
