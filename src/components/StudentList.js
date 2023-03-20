import EachStudent from './EachStudent';
import { dataOfStudents } from '../dataOfStudents';
import { useState } from 'react';

function StudentList() {
  const [studentData, setStudentData] = useState(dataOfStudents);

  return (
    <div>
      <p>
        {dataOfStudents.map(EachStudent)}
        {/* <EachStudent /> */}
      </p>
    </div>
  );
}

export default StudentList;
