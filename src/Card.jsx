import Profilepicture from "./assets/pfp3 me.png";

function Card() {
  return (
    <div className="card">
      <img
        src={Profilepicture}
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        alt="profile picture"
      />
      <h2>Ashura-Hub</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        doloremque, enim omnis debitis sunt.
      </p>
    </div>
  );
}

export default Card;
