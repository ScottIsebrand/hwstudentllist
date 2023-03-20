import { dataOfStudents } from '../dataOfStudents';
import Score from './Score';

function EachStudent(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Bio: {props.bio}</p>

      {props.scores.map((score) => (
        <Score score={score} />
      ))}
    </div>
  );
}

export default EachStudent;
