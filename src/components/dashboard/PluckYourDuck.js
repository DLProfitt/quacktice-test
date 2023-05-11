import { Link } from "react-router-dom"

export const PluckYourDuck = () => {
  const [ducks, setDucks] = useState([])

  useEffect(() => {

    ducksArray.map(duck => {
      setDucks(...ducks, duck)
    })
  }, [])

  const pluckDuck = () => {

  }

  if (ducks) {
    return (
      <>
        <div className="duck-container">
          <div className="duck-row">
            <div className="duck-image">
              <img src="" alt="" />
            </div>
            <div className="duck-image">
              <img src="" alt="" />
            </div>
            <div className="duck-image">
              <img src="" alt="" />
            </div>
          </div>
          <div className="duck-row">
            <div className="duck-image">
              <img src="" alt="" />
            </div>
            <div className="duck-image">
              <img src="" alt="" />
            </div>
            <div className="duck-image">
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <button type="button" onClick={pluckDuck}>Pluck It!</button>
      </>
    )
  } : {
    <>
      <div className="duck-themes">
        <label>Select A Theme</label>
        <ul>
          <li className="duck-theme">Funny</li>
          <li className="duck-theme">Serious</li>
          <li className="duck-theme">Adventure</li>
          <li className="duck-theme">Artsy</li>
          <li className="duck-theme">IRL</li>
          <li className="duck-theme">Costume</li>
          <li className="duck-theme">Just give me a duck and let me take the quiz...</li>
        </ul>
      </div>
    </>
  }
}