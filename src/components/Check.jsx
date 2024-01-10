import "./Check.css";
import { getUserName, nextProfile } from "./ProfileHandler";

const Check = () => {
  return (
    <div className="matchButton">
      <button onClick={handleMatchClick} class="match-button">
        <img src="/checkmark.png" alt="Checkmark" class="icon" />
      </button>
    </div>
  );
};

function handleMatchClick() {


  let usr = getUserName();


  alert("You sent a message to " + usr + "!");

  nextProfile();
};




export default Check;