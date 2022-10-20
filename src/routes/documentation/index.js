import ReactJson from "react-json-view"
import style from "./style.css"

// Note: `user` comes from the URL, courtesy of our router
const Documentation = () => {
  const input = `{
		"bookingDateTime": {
			"year": 2022,
			"month": "OCTOBER",
			"monthValue": 10,
			"dayOfMonth": 17,
			"dayOfWeek": "MONDAY",
			"era": "CE",
			"dayOfYear": 290,
			"leapYear": false,
			"chronology": {
				"id": "ISO",
				"calendarType": "iso8601"
			}
		}
	}`

  const output = `{
		"bookingDateTime": "17-10-2022"
	}`

  const inputJSON = JSON.parse(input)
  const outputJSON = JSON.parse(output)

  return (
    <div class={style.documentation}>
      <div>
        <h3>Input example:</h3>
        <ReactJson
          src={inputJSON}
          name={false}
          displayDataTypes={false}
          displayObjectSize={false}
        />
      </div>
      <div>
        <h3>Output example:</h3>
        <ReactJson
          src={outputJSON}
          name={false}
          displayDataTypes={false}
          displayObjectSize={false}
        />
      </div>
    </div>
  )
}

export default Documentation
