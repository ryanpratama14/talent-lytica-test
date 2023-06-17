type DataItems = {
  [key: string]: {
    [key: string]: number | undefined;
  };
};

const defaultStudentValue = undefined;
export const numAspects: number = 4;
export const numStudents: number = 12;
export const maxGrade: number = 10;

export const initialValue: DataItems = {};

for (let i = 1; i <= numAspects; i++) {
  initialValue[`aspek_penilaian_${i}`] = {};
  for (let j = 1; j <= numStudents; j++) {
    initialValue[`aspek_penilaian_${i}`][`mahasiswa_${j}`] =
      defaultStudentValue;
  }
}
