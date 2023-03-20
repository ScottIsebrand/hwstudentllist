import { dataOfStudents } from '../dataOfStudents';

function Score(props) {
  const { score } = props;
  console.log(score);
  return (
    <p>
      Date: {score.date} <br></br>
      Score: {score.score}
    </p>
  );
}

export default Score;
